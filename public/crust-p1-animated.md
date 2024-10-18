```sh
find . -maxdepth 1 -name "*.png" -print0 | xargs -0 -P16 '-I{}' magick '{}' -resize 1024x1024^ -gravity center -crop 1024x1024+0+0 +repage -background '#ffffff' -alpha remove -alpha off 'conv/{}'

ffmpeg -i crust-p1-animated%04d.png -c:v libx264 -pix_fmt yuv420p -preset veryslow -profile:v high -level 4.2 -tune fastdecode -g 2 -crf 20 -an crust-p1-animated-h264.mp4
# This is where it would say "-g 2" but iOS has a subpar video decoder that does not support precise seeking between key frames
ffmpeg -i crust-p1-animated%04d.png -c:v libx265 -pix_fmt yuv420p -tune fastdecode -g 1 -crf 23 -tag:v hvc1 -an crust-p1-animated-h265.mp4
ffmpeg -i crust-p1-animated%04d.png -c:v libsvtav1 -pix_fmt yuv420p -svtav1-params fast-decode=1 -g 2 -crf 23 -an crust-p1-animated-av1.mp4
```
