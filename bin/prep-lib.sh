#!/bin/bash
function createTargetDir {
    args=("$@")
    local dir=${args[0]}
    if [[ -d ${dir} ]]; then
      echo "remove directory ${dir}..."
      rm -rf ${dir}
    fi
    echo "create empty directory ${dir}..."
    mkdir -p ${dir}
}

function removeSolution() {
  args=("$@")
  local input=${args[0]}
  local DEST=${args[1]}
  local filename=$(basename -- "$input")
  local extension="${filename##*.}"
  local filename="${filename%.*}"

  echo "Replace solutions ${input} with comments"
  echo "and save it in ${DEST}"

  if [[ ${extension} = "js" || ${filename} == "Jenkinsfile"[1-9]*  ]]; then
    cat "$input" | sed 's/.*\/\/??.*/\/\/??/' > "${DEST}"
  elif [[ ${extension} = "sql" ]]; then
    cat "$input" | sed '/.*\/\*??\*\//d' > "${DEST}"
  elif [[ ${extension} = "sh" ]]; then
    cat "$input" | sed "/<<'###'/d" | sed "/###/d" |\
     sed '/.*\#??.*/d' | sed 's/#\!\!//' > "${DEST}"
  elif [[ ${extension} = "html" ]]; then
    cat "$input" | sed "s|/\*|\n&|g;s|*/|&\n|g" |\
      sed "/\/\*/,/*\//d" |\
      sed "s/.*<!--??-->/<!--??-->/" |\
      sed "s/.*\/\/??.*/\/\/??/" |\
      sed "/^$/d" > "${DEST}"
  fi
}

function parseCodeForIstest() {
  args=("$@")
  local input=${args[0]}
  local DEST=${args[1]}
  local filename=$(basename -- "$input")
  local extension="${filename##*.}"
  local filename="${filename%.*}"

  echo "Parse solution ${input} for istest"
  echo "and save it in ${DEST}.txt!"

  if [[ ${extension} = "js" ]]; then
      cat "$input" |\
          sed '/\/\*/d' |\
          sed '/\*\//d' |\
          sed '/.*\/\/??/d' |\
          sed 's/\/\/\!\!//' > "${DEST}.txt"
  elif [[ ${extension} = "sh" ]]; then
      cat "$input" |\
        sed "/<<'###'/d" |\
        sed "/###/d" |\
        sed '/.*\#??.*/d' |\
        sed 's/#\!\!//' > "${DEST}.txt"
  fi
}

function copyFile {
  local EX=$1
  local exDir=$2
  local file=$3
  echo "copy ${EX}/${file} to ${exDir}/${EX}/${file} ..."
  cp "${EX}/${file}" "${exDir}/${EX}/${file}"
}
