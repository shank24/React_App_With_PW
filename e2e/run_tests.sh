#cucumber tag
tag=$1
export COMMON_CONFIG_FILE=env/common.env
#run cucumber tests & on failure run postcucumber 
yarn run cucumber --profile $tag || yarn run postcucumber