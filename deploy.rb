require 'byebug'
$env = ARGV[0]

`rm -rf dist/`
`npm run #{$env}`
def content_type
  @_content_type ||= content_types_values
end

def content_types_values
  {
    js:     "text/javascript",
    css:    "text/css",
    jpeg:   "image/jpeg",
    jpg:    "image/jpg",
    png:    "image/png",
    gif:    "image/gif",
    bmp:    "image/bmp",
    tiff:   "image/tiff",
    plain:  "text/plain",
    rtf:    "text/rtf",
    msword: "application/msword",
    zip:    "application/zip",
    mpeg:   "audio/mpeg",
    pdf:    "application/pdf",
    html:   "text/html"

  }
end

def upload
  bucket_name = bucket_names[$env]
  Dir.glob("dist/#{$env}/*").each do |file|
    mime_type = file.split(".")[-1]
    ext = file.split(".")[-2]
    next unless mime_type == "gz"
    ifile = file.gsub(".gz", "")
    `cp #{file} #{ifile} `
    s3_headers = "-m #{content_type[ext.to_sym]} --add-header='Content-Encoding:gzip'"
    `s3cmd put #{ifile} #{bucket_name} #{s3_headers} -P`
  end
  `s3cmd put -r assets/images #{bucket_name}/ -P`
  `s3cmd put dist/index.html #{bucket_name}/index.html -m text/html -P`
end

def bucket_names
  @_bucket_names ||= {"stage1" => "s3://no-server2.embibe.com", "stage2" => "s3://staging2.embibe.com",
    "stage3" => "s3://embibe-rearch-staging3",
    "preprod" => "s3://rearch-preprod",
    "prod" => "s3://rearch-production"}
end
puts upload
