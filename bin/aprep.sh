#!/bin/bash
#
# for i in a04-A.*; do cp "$i" "${i/-A/-B}"; done
#
# Help message
if test $# -lt 2;then
  echo "Error: -p <destination> -h <html-file> [-s <stylesheet>]"
  echo "      [-c <html-file>] [-f <file>] [-d <directory>] arguments are required!"
  echo "Exit script."
  exit 1
fi

function removeSolutionInJS() {
  local DEST=$1
  local input=$2
  local extension="$(echo $input|cut -d'.' -f2)"
  #local plain="$(echo $input|cut -d'.' -f1)-${extension}.txt"
  local output="$(echo $input|cut -d'-' -f1)"
  # prepare text for istest
  #  printf "%s:\n" "$input" > "${plain}"
  #  cat "$input" >> "${plain}"
  # remove task and solution
  cat "$input" |\
    #sed 's|/\*|\n&|g;s|*/|&\n|g' |\
    #sed '/\/\*/,/*\//d' |\
    sed 's/.*\/\/??.*/\/\/??/' > "${DEST}${output}.${extension}"
    #sed '/^$/d' > "${DEST}${output}.${extension}"
}

function parseCodeForIstest() {
  local DEST=$1
  local input=$2
  #local extension="$(echo $input|cut -d'.' -f2)"
  local output="$(echo $input|cut -d'-' -f1)"
  local version="$(echo $input|cut -d'-' -f2)"
  # parse for istest lückentext
  cat "$input" |\
    sed '/\/\*/d' |\
    sed '/\*\//d' |\
    sed '/.*\/\/??/d' |\
    sed 's/\/\/\!\!//' > "${DEST}${output}-${version}.txt"
}


function removeSolutionInHtml() {
  local DEST=$1
  local input=$2
  local extension="$(echo $input|cut -d'.' -f2)"
  #local plain="$(echo $input|cut -d'.' -f1)-${extension}.txt"
  local output="$(echo $input|cut -d'-' -f1)"
  # prepare text for istest
  # printf "%s:\n" "$input" > "${plain}"
  # cat "$input" >> "${plain}"
  # remove task and solution
  cat "$input" | \
    sed 's|/\*|\n&|g;s|*/|&\n|g' |\
    sed '/\/\*/,/*\//d' |\
    #sed 's|/<!--\B|\n&|g;s|\E-->|&\n|g' |\
    #sed '/<!--B/,/E-->/d' |\
    sed 's/.*<!--??-->/<!--??-->/' |\
    sed 's/.*\/\/??.*/\/\/??/' |\
    sed '/^$/d' > "${DEST}${output}.${extension}"
}

function removeSolutionInStyle() {
  local DEST=$1
  local input=$2
  local extension="$(echo $input|cut -d'.' -f2)"
  local plain="$(echo $input|cut -d'.' -f1)-${extension}.txt"
  local output="$(echo $input|cut -d'-' -f1)"
  # prepare text for istest
  printf "%s:\n" "$input" > "${plain}"
  cat "$input" >> "${plain}"
  # remove task and solution
  cat "$input" |\
  sed 's/.*\/\*??\*\/.*/\/\*??\*\//' >"${DEST}${output}.${extension}"

  cat "${DEST}${output}.${extension}" | \
    sed 's|/\*\B|\n&|g;s|\E\*/|&\n|g' |\
    sed '/\/\*B/,/E\*\//d' |\
    sed '/^$/d' > "${DEST}${output}.${extension}"

}
function removeSolutionInText() {
  local DEST=$1
  local input=$2
  local extension="$(echo $input|cut -d'.' -f2)"
  local output="$(echo $input|cut -d'-' -f1)"
  # remove solution
  cat "$input" |\
    sed 's|/\*\B|\n&|g;s|\E\*/|&\n|g' |\
    sed '/\/\*B/,/E\*\//d' |\
    sed '/^$/d' > "${DEST}${output}.${extension}"
}

# Replace call of callee in caller
function changeCallAB() {
  local DEST=$1
  local caller=$2
  local ext="$(echo $caller|cut -d'.' -f2)"
  local output="$(echo $caller|cut -d'-' -f1)"
  local callee=$3
  local extCallee="$(echo $callee|cut -d'.' -f2)"
  local outCallee="$(echo $callee|cut -d'-' -f1)"

  # important: use double quotes when working with sed and variables!
  cat "${caller}" |\
   sed "s/${callee}/${outCallee}.${extCallee}/g" > "${DEST}${output}.${ext}"
}

function changeCall() {
  local DEST=$1
  local caller=$2
  local callee=$3
  local extCallee="$(echo $callee|cut -d'.' -f2)"
  local outCallee="$(echo $callee|cut -d'-' -f1)"

  # important: use double quotes when working with sed and variables!
  cat "${caller}" |\
   sed "s/${callee}/${outCallee}.${extCallee}/g" > "${DEST}${caller}"
}

function copyFileAB() {
  local DEST=$1
  local input=$2
  local extension="$(echo $input|cut -d'.' -f2)"
  local output="$(echo $input|cut -d'-' -f1)"
  cp "$input" "${DEST}${output}.${extension}"
}

function copyFile() {
  local DEST=$1
  local input=$2
  cp "$input" "${DEST}${input}"
}

function copyDir() {
  local DEST=$1
  local input=$2
  if [[ -d "${DEST}${input}" ]]; then
        rm -rf "${DEST}${input}"
  fi
  cp -r "$input" "${DEST}${input}"
}

# loop for reading all options.
while getopts "p:i:h:s:f:c:d:t:j:x:y:" option; do
  case $option in
  p ) echo "Destination path ${OPTARG}"
    dest=${OPTARG}
    ;;
  i ) echo "Parse in ${OPTARG} for istest2"
    code4istest=${OPTARG}
    ;;
  h ) echo "Replace in ${OPTARG} solutions with comments"
    html=${OPTARG}
    ;;
  t ) echo "Remove in ${OPTARG} solutions"
    txt=${OPTARG}
    ;;
  c ) echo "Replace in ${OPTARG} callee in caller"
    caller=${OPTARG}
    ;;
  y ) echo "Replace in ${OPTARG} callee in caller"
    callerAB=${OPTARG}
    ;;
  d ) echo "Copy directory in ${OPTARG}"
    dir=${OPTARG}
    ;;
  s ) echo "Replace in ${OPTARG} solutions with comments"
    style=${OPTARG}
    ;;
  j ) echo "Replace in ${OPTARG} solutions with comments"
    jscript=${OPTARG}
    ;;
  f ) echo "copy file ${OPTARG} to ${DEST}"
    file=${OPTARG}
    ;;
  x ) echo "copy file ${OPTARG} to ${DEST} and remove exam-series"
    fileAB=${OPTARG}
    ;;
  * ) echo "Invalid option"
    ;;
  esac
done

# destination path
if [[ ${dest} != "" ]];
then
  # html
  if [[ ${html} != "" && -f ${html} ]]; then
      removeSolutionInHtml "${dest}" "${html}"
  fi

  # Stylesheet
  if [[ ${style} != "" && -f ${style} ]]; then
      removeSolutionInStyle "${dest}" "${style}"
  fi

  # JavaScript
  if [[ ${jscript} != "" && -f ${jscript} ]]; then
      removeSolutionInJS "${dest}" "${jscript}"
  fi

  # Parse Code istest2
  if [[ ${code4istest} != "" && -f ${code4istest} ]]; then
      parseCodeForIstest "${dest}" "${code4istest}"
  fi

  # Text
  if [[ ${txt} != "" && -f ${txt} ]]; then
      removeSolutionInText "${dest}" "${txt}"
  fi

  # Change call of callee in caller and remove exam-series of caller
  if [[ ${callerAB} != "" && -f ${callerAB} ]]; then
      if [[ ${jscript} != "" && -f ${jscript} ]]; then
        changeCallAB "${dest}" "${callerAB}" ${jscript}
      elif [[ ${style} != "" && -f ${style} ]]; then
        changeCallAB "${dest}" "${callerAB}" ${style}
      fi
  fi

  # Change call of callee in caller
  if [[ ${caller} != "" && -f ${caller} ]]; then
      if [[ ${jscript} != "" && -f ${jscript} ]]; then
        changeCall "${dest}" "${caller}" ${jscript}
      fi
  fi

  # Copy directory
  if [[ ${dir} != "" && -d ${dir} ]]; then
      copyDir "${dest}" "${dir}"
  fi

  # Copy file
  if [[ ${file} != "" && -f ${file} ]]; then
      copyFile "${dest}" "${file}"
  fi

  # Copy file and remove exam-series in filename
  if [[ ${fileAB} != "" && -f ${fileAB} ]]; then
      copyFileAB "${dest}" "${fileAB}"
  fi
fi
