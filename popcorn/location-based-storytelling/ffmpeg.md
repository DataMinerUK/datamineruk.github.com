Editing Video on the Commandline
================================
Video can be manipulated using the `ffmpeg` command available from:
   http://ffmpeg.org

(Mac binaries are here: http://www.evermeet.cx/ffmpeg, uncompress .7z files using Keka: http://www.kekaosx.com)

The `ffmpeg` command is very powerful but also very complicated and best learnt by patterns. The following is how to slice a segment from a video starting at 10 seconds and running for 30 seconds.

    ffmpeg -ss 10 -t 30 -i input.mp4 output.mp4

To combine a number of video files:

    ffmpeg -i input1.mp4 -i input2.mp4 -i input3.mp4 -filter_complex 'concat=n=3' output.mp4

Make sure the `n=` portion equals the number of input files.

