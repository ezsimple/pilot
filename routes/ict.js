const _ = require('lodash'); // 오우~ 판타스틱!! lodash
const moment = require('moment');

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
    icNo: 'I1',
    cmdString: [],
  };

  // -------------------------------
  // 장비별 타입별 다중 메세지 설정
  // -------------------------------
  e_str = { eqId: 'E1', report: [] };
  e_evt = {
    pigmnum: '100',
    eatplan: '1',
    setamt: '2',
    eatamt: '3',
    gyobaeday: '4',
    lastentertm: '5',
    eatrate: '6',
    entercnt: '7',
    elecnum: '8',
    updateTm: '',
  };
  randEvt(msg, e_str, e_evt);

  f_str = { eqId: 'F1', report: [] };
  f_evt = {
    pigmnum: '101',
    eatplan: '11',
    setamt: '12',
    eatamt: '13',
    gyobaeday: '14',
    bunmanday: '15',
    eatrate: '16',
    updateTm: '',
  };
  randEvt(msg, f_str, f_evt);

  l_str = { eqId: 'L1', report: [] };
  l_evt = {
    aveday: '21',
    feedamt: '22',
    stkg: '23',
    pigcnt: '24',
    wateramt: '25',
    wateramtsec: '26',
    updateTm: '',
  };
  randEvt(msg, l_str, l_evt);

  s_str = { eqId: 'S1', report: [] };
  s_evt = {
    temp: '31',
    ventil: '32',
    co2: '33',
    Nh3: '34',
    humi: '35',
    illum: '36',
    updateTm: '',
  };
  randEvt(msg, s_str, s_evt);

  w_str = { eqId: 'W1', report: [] };
  w_evt = {
    warteramt: '41',
    updateTm: '',
  };
  randEvt(msg, w_str, w_evt);

  // 응답 전송
  res.send(prettyJson(msg));
};

module.exports = {
  doIt: doIt,
};

function randEvt(msg, str, evt) {
  now = moment();
  ms = now.get('millisecond');
  updateTm = now.format('YYYYMMDD_HHmm');
  updateTm = updateTm + (ms % 60);
  evt.updateTm = updateTm;
  report = str.report;
  max = _.random(1, 3);
  for (i = 0; i < max; i++) report.push(evt);
  // lodash의 times를 알아봐야 겠다
  // _.times(max, report.push(evt));
  msg.cmdString.push(str);
}
