#!/bin/bash

# store script parameters
input_n=$1

# create pattern match `1.*`
pattern="$input_n.*"

# find test dir that match the pattern
test_dir=$(find . -type d -name "$pattern")

test_file=$test_dir/test.mjs

echo "***********Running test file: $test_file***********\n\n"
node $test_file
echo "\n\n*************************************************\n"



