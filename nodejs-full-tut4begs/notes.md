# Link to how to create a large .txt file
https://gist.github.com/olivertappin/0fc0b6a76e6555e51f884f9638249de2

* This example creates a 2.7Gb .txt file
$ dd if=/dev/zero of=largefile.txt count=1024 bs=2748576
