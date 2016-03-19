#!/bin/bash

if [ -d "build" ]; then
	echo "Cleaning up old build directory"
	rm -r build
fi
mkdir build
