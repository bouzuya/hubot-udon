# Description
#   A Hubot script that display an Udon
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   うどん - display an Udon
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.hear /(?:うどん|udon)/i, (res) ->
    res
      .http 'http://ajax.googleapis.com/ajax/services/search/images'
      .query
        q: 'うどん'
        v: '1.0'
        rsz: '8'
        safe: 'active'
      .get() (err, _, body) ->
        images = JSON.parse(body).responseData.results
        if images?.length > 0
          res.send res.random(images).url
