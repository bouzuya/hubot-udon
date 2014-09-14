// Description
//   A Hubot script that display an Udon
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   うどん - display an Udon
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.hear(/(?:うどん|udon)/i, function(res) {
    return res.http('http://ajax.googleapis.com/ajax/services/search/images').query({
      q: 'うどん',
      v: '1.0',
      rsz: '8',
      safe: 'active'
    }).get()(function(err, _, body) {
      var images;
      images = JSON.parse(body).responseData.results;
      if ((images != null ? images.length : void 0) > 0) {
        return res.send(res.random(images).url);
      }
    });
  });
};
