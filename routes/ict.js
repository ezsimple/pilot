const _ = require('lodash'); // 오우~ 판타스틱!! lodash

function prettyJson(msg) {
  return JSON.stringify(msg, undefined, 2);
}

let doIt = function(req, res, next) {
  // -------------------------------
  // 기본 메세지 설정
  // -------------------------------
  let msg = {
    type: 'res',
    farmNo: '1387',
    icNo: 'I2',
    cmdString: [],
  };

  // -------------------------------
  // 장비별 다중 메세지 설정
  // -------------------------------
  str = { eqid: 'FS_SNR_0000000000025', report: [] };
  evt = {
    eleccur: '9.100',
    igr: '50.000',
    elecalarm: '0',
    lgralarm: '2',
    startTm: '20190418_071513',
    endTm: '20190418_071513',
    regTm: '20190418_071513',
  };

  report = str.report;
  max = _.random(1, 10);
  for (i = 0; i < max; i++) report.push(evt);

  msg.cmdString.push(str);

  // 응답 전송
  res.send(prettyJson(msg));
};

module.exports = {
  doIt: doIt,
};
