# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.21

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/local/bin/cmake

# The command to remove a file.
RM = /usr/local/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /root/code/apple-sign/zsign

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /root/code/apple-sign/zsign/build

# Include any dependencies generated for this target.
include CMakeFiles/zsign.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include CMakeFiles/zsign.dir/compiler_depend.make

# Include the progress variables for this target.
include CMakeFiles/zsign.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/zsign.dir/flags.make

CMakeFiles/zsign.dir/archo.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/archo.cpp.o: ../archo.cpp
CMakeFiles/zsign.dir/archo.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/zsign.dir/archo.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/archo.cpp.o -MF CMakeFiles/zsign.dir/archo.cpp.o.d -o CMakeFiles/zsign.dir/archo.cpp.o -c /root/code/apple-sign/zsign/archo.cpp

CMakeFiles/zsign.dir/archo.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/archo.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/archo.cpp > CMakeFiles/zsign.dir/archo.cpp.i

CMakeFiles/zsign.dir/archo.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/archo.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/archo.cpp -o CMakeFiles/zsign.dir/archo.cpp.s

CMakeFiles/zsign.dir/bundle.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/bundle.cpp.o: ../bundle.cpp
CMakeFiles/zsign.dir/bundle.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object CMakeFiles/zsign.dir/bundle.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/bundle.cpp.o -MF CMakeFiles/zsign.dir/bundle.cpp.o.d -o CMakeFiles/zsign.dir/bundle.cpp.o -c /root/code/apple-sign/zsign/bundle.cpp

CMakeFiles/zsign.dir/bundle.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/bundle.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/bundle.cpp > CMakeFiles/zsign.dir/bundle.cpp.i

CMakeFiles/zsign.dir/bundle.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/bundle.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/bundle.cpp -o CMakeFiles/zsign.dir/bundle.cpp.s

CMakeFiles/zsign.dir/macho.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/macho.cpp.o: ../macho.cpp
CMakeFiles/zsign.dir/macho.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building CXX object CMakeFiles/zsign.dir/macho.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/macho.cpp.o -MF CMakeFiles/zsign.dir/macho.cpp.o.d -o CMakeFiles/zsign.dir/macho.cpp.o -c /root/code/apple-sign/zsign/macho.cpp

CMakeFiles/zsign.dir/macho.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/macho.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/macho.cpp > CMakeFiles/zsign.dir/macho.cpp.i

CMakeFiles/zsign.dir/macho.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/macho.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/macho.cpp -o CMakeFiles/zsign.dir/macho.cpp.s

CMakeFiles/zsign.dir/openssl.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/openssl.cpp.o: ../openssl.cpp
CMakeFiles/zsign.dir/openssl.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Building CXX object CMakeFiles/zsign.dir/openssl.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/openssl.cpp.o -MF CMakeFiles/zsign.dir/openssl.cpp.o.d -o CMakeFiles/zsign.dir/openssl.cpp.o -c /root/code/apple-sign/zsign/openssl.cpp

CMakeFiles/zsign.dir/openssl.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/openssl.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/openssl.cpp > CMakeFiles/zsign.dir/openssl.cpp.i

CMakeFiles/zsign.dir/openssl.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/openssl.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/openssl.cpp -o CMakeFiles/zsign.dir/openssl.cpp.s

CMakeFiles/zsign.dir/signing.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/signing.cpp.o: ../signing.cpp
CMakeFiles/zsign.dir/signing.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_5) "Building CXX object CMakeFiles/zsign.dir/signing.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/signing.cpp.o -MF CMakeFiles/zsign.dir/signing.cpp.o.d -o CMakeFiles/zsign.dir/signing.cpp.o -c /root/code/apple-sign/zsign/signing.cpp

CMakeFiles/zsign.dir/signing.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/signing.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/signing.cpp > CMakeFiles/zsign.dir/signing.cpp.i

CMakeFiles/zsign.dir/signing.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/signing.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/signing.cpp -o CMakeFiles/zsign.dir/signing.cpp.s

CMakeFiles/zsign.dir/zsign.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/zsign.cpp.o: ../zsign.cpp
CMakeFiles/zsign.dir/zsign.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_6) "Building CXX object CMakeFiles/zsign.dir/zsign.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/zsign.cpp.o -MF CMakeFiles/zsign.dir/zsign.cpp.o.d -o CMakeFiles/zsign.dir/zsign.cpp.o -c /root/code/apple-sign/zsign/zsign.cpp

CMakeFiles/zsign.dir/zsign.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/zsign.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/zsign.cpp > CMakeFiles/zsign.dir/zsign.cpp.i

CMakeFiles/zsign.dir/zsign.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/zsign.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/zsign.cpp -o CMakeFiles/zsign.dir/zsign.cpp.s

CMakeFiles/zsign.dir/common/base64.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/common/base64.cpp.o: ../common/base64.cpp
CMakeFiles/zsign.dir/common/base64.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_7) "Building CXX object CMakeFiles/zsign.dir/common/base64.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/common/base64.cpp.o -MF CMakeFiles/zsign.dir/common/base64.cpp.o.d -o CMakeFiles/zsign.dir/common/base64.cpp.o -c /root/code/apple-sign/zsign/common/base64.cpp

CMakeFiles/zsign.dir/common/base64.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/common/base64.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/common/base64.cpp > CMakeFiles/zsign.dir/common/base64.cpp.i

CMakeFiles/zsign.dir/common/base64.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/common/base64.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/common/base64.cpp -o CMakeFiles/zsign.dir/common/base64.cpp.s

CMakeFiles/zsign.dir/common/common.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/common/common.cpp.o: ../common/common.cpp
CMakeFiles/zsign.dir/common/common.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_8) "Building CXX object CMakeFiles/zsign.dir/common/common.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/common/common.cpp.o -MF CMakeFiles/zsign.dir/common/common.cpp.o.d -o CMakeFiles/zsign.dir/common/common.cpp.o -c /root/code/apple-sign/zsign/common/common.cpp

CMakeFiles/zsign.dir/common/common.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/common/common.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/common/common.cpp > CMakeFiles/zsign.dir/common/common.cpp.i

CMakeFiles/zsign.dir/common/common.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/common/common.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/common/common.cpp -o CMakeFiles/zsign.dir/common/common.cpp.s

CMakeFiles/zsign.dir/common/json.cpp.o: CMakeFiles/zsign.dir/flags.make
CMakeFiles/zsign.dir/common/json.cpp.o: ../common/json.cpp
CMakeFiles/zsign.dir/common/json.cpp.o: CMakeFiles/zsign.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_9) "Building CXX object CMakeFiles/zsign.dir/common/json.cpp.o"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT CMakeFiles/zsign.dir/common/json.cpp.o -MF CMakeFiles/zsign.dir/common/json.cpp.o.d -o CMakeFiles/zsign.dir/common/json.cpp.o -c /root/code/apple-sign/zsign/common/json.cpp

CMakeFiles/zsign.dir/common/json.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zsign.dir/common/json.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /root/code/apple-sign/zsign/common/json.cpp > CMakeFiles/zsign.dir/common/json.cpp.i

CMakeFiles/zsign.dir/common/json.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zsign.dir/common/json.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /root/code/apple-sign/zsign/common/json.cpp -o CMakeFiles/zsign.dir/common/json.cpp.s

# Object files for target zsign
zsign_OBJECTS = \
"CMakeFiles/zsign.dir/archo.cpp.o" \
"CMakeFiles/zsign.dir/bundle.cpp.o" \
"CMakeFiles/zsign.dir/macho.cpp.o" \
"CMakeFiles/zsign.dir/openssl.cpp.o" \
"CMakeFiles/zsign.dir/signing.cpp.o" \
"CMakeFiles/zsign.dir/zsign.cpp.o" \
"CMakeFiles/zsign.dir/common/base64.cpp.o" \
"CMakeFiles/zsign.dir/common/common.cpp.o" \
"CMakeFiles/zsign.dir/common/json.cpp.o"

# External object files for target zsign
zsign_EXTERNAL_OBJECTS =

zsign: CMakeFiles/zsign.dir/archo.cpp.o
zsign: CMakeFiles/zsign.dir/bundle.cpp.o
zsign: CMakeFiles/zsign.dir/macho.cpp.o
zsign: CMakeFiles/zsign.dir/openssl.cpp.o
zsign: CMakeFiles/zsign.dir/signing.cpp.o
zsign: CMakeFiles/zsign.dir/zsign.cpp.o
zsign: CMakeFiles/zsign.dir/common/base64.cpp.o
zsign: CMakeFiles/zsign.dir/common/common.cpp.o
zsign: CMakeFiles/zsign.dir/common/json.cpp.o
zsign: CMakeFiles/zsign.dir/build.make
zsign: /usr/lib/x86_64-linux-gnu/libssl.so
zsign: /usr/lib/x86_64-linux-gnu/libcrypto.so
zsign: /usr/lib/x86_64-linux-gnu/libz.so
zsign: CMakeFiles/zsign.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/root/code/apple-sign/zsign/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_10) "Linking CXX executable zsign"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/zsign.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/zsign.dir/build: zsign
.PHONY : CMakeFiles/zsign.dir/build

CMakeFiles/zsign.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/zsign.dir/cmake_clean.cmake
.PHONY : CMakeFiles/zsign.dir/clean

CMakeFiles/zsign.dir/depend:
	cd /root/code/apple-sign/zsign/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /root/code/apple-sign/zsign /root/code/apple-sign/zsign /root/code/apple-sign/zsign/build /root/code/apple-sign/zsign/build /root/code/apple-sign/zsign/build/CMakeFiles/zsign.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/zsign.dir/depend

