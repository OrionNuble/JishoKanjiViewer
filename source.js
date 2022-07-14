function SetCookie(Value, ExpiryInDays){

  let defName = "0";

  let DateObj = new Date();

  DateObj.setTime(DateObj.getTime() + (ExpiryInDays * 24 * 60 * 60));

  let ExpiryDate = "; expires=" + DateObj.toUTCString();

  document.cookie = defName + "=" + Value + ExpiryDate;

}

function GetCookie(){

  let Cookie = document.cookie;

  let CookiesArray = Cookie.split(";");

  let ReadCookie = "";

  let ReadCookieArray = CookiesArray[0];
  ReadCookie = ReadCookieArray.split("=")[1];

  console.log("Supposed Cookie: " + ReadCookie);

  return ReadCookie;

}

let AllJishoKanjiPages = [];

let GradeOneKanjiPages = [];
let GradeTwoKanjiPages = [];
let GradeThreeKanjiPages = [];
let GradeFourKanjiPages = [];
let GradeFiveKanjiPages = [];
let GradeSixKanjiPages = [];

let BookmarkedKanjiGradeANDIndex = [];

// Grade One

let Grade1Kanjis = "日一人年大十二本中出三見月生五上力四金九入立手学田円子目八六下正気小七山文女百石先名川村千町水男口校竹早空土木車王足字音玉赤青森白草林天火花右左休虫夕糸貝雨犬耳"; // 80

// Grade Two

let GradeTwo_One = "国会同長自時行社内分後前地米合市間方東回場当今明新京公通理高体首数記作用外点言強活原交野思家組来心直教話多元近考画海売北知午引書計番算朝線台広道形半工止切谷西科"; // 80
let GradeTwo_Two = "電細丸里楽少戸声語親園聞馬矢頭食門何南船答夜羽万店帰歌岩光角図室太歩風紙星黒春毎寺絵刀弓色走秋夏汽顔古晴買週雪母毛読黄池友雲鳴父遠曜弱肉才鳥麦冬昼茶弟牛兄妹姉魚"; // 80

let Grade2Kanjis = GradeTwo_One + GradeTwo_Two;

// Grade Three

let GradeThree_One = "事対部相定発者業実決全表員調開化問代動期取和平受主題意指第度持予向宮都勝面委反世区県進次院係感投界打島両式談流局安放重球役集身物由使所品死消神昭配始育想運終農州助住追商葉真落有負守美急命送福整横深転申"; // 100
let GradeThree_Two = "様港研階路他究橋岸客起着乗登病速央号待族銀詩根苦具医丁仕去味鉄写返油植宿豆倍帳波注級幸練悪等曲庭血温庫坂息館屋羊板列遊君笛章酒悲秒短薬習陽皮歯柱祭筆童洋旅畑緑礼軽昔泳荷炭服湖湯箱駅氷拾暗勉鼻皿飲暑寒漢"; // 100

let Grade3Kanjis = GradeThree_One + GradeThree_Two;

// Grade Four

let GradeFour_One = "議連民氏選関戦最約法的要治成協機挙加続改不初結井府共軍以参利案信側得求昨官告松佐変産各票果必崎争無位置隊別付士夫特害副席残念博労例然費伝景奈辺功料養街失差建課末極種沖量望観察鹿郡紀説象達良候満敗管兵器"; // 100 (*99/Missed One)
let GradeFour_Two = "典賀賞縄縄積徳録省熊倉唱周材健飛単試完旗潟"; // 100
let GradeFour_Three = ""; // 25

let Grade4Kanjis = GradeFour_One + GradeFour_Two + GradeFour_Three;

// Grade Five

let GradeFive_One = ""; // 100
let GradeFive_Two = ""; // 100
let GradeFive_Three = ""; // 6

let Grade5Kanjis = GradeFive_One + GradeFive_Two + GradeFive_Three;

// Grade Six

let GradeSix_One = ""; // 100
let GradeSix_Two = ""; // 92
let GradeSix_Three = ""; // 0 (Reserved)

let Grade6Kanjis = GradeSix_One + GradeSix_Two + GradeSix_Three;


for (let i = 0; i < Grade1Kanjis.length; i++){


  GradeOneKanjiPages.push(Grade1Kanjis[i]);

}

for (let j = 0; j < Grade2Kanjis.length; j++){


  GradeTwoKanjiPages.push(Grade2Kanjis[j]);

}

for (let n = 0; n < Grade3Kanjis.length; n++){


  GradeThreeKanjiPages.push(Grade3Kanjis[n]);

}

for (let m = 0; m < Grade4Kanjis.length; m++){


  GradeFourKanjiPages.push(Grade4Kanjis[m]);

}

for (let x = 0; x < Grade5Kanjis.length; x++){


  GradeFiveKanjiPages.push(Grade5Kanjis[x]);

}

for (let y = 0; y < Grade6Kanjis.length; y++){


  GradeSixKanjiPages.push(Grade6Kanjis[y]);

}

AllJishoKanjiPages.push(GradeOneKanjiPages);
AllJishoKanjiPages.push(GradeTwoKanjiPages);
AllJishoKanjiPages.push(GradeThreeKanjiPages);
AllJishoKanjiPages.push(GradeFourKanjiPages);
AllJishoKanjiPages.push(GradeFiveKanjiPages);
AllJishoKanjiPages.push(GradeSixKanjiPages);


let KanjiPageBeginning = "https://jisho.org/search/";

let KanjiPageEnding = "%20%23kanji";

let CurrentKanjiPageIndex = 0;
let CurrentKanjiGrade = 1;

let CurrentKanji = "";

CurrentKanji = KanjiPageBeginning + AllJishoKanjiPages[CurrentKanjiGrade - 1][CurrentKanjiPageIndex] + KanjiPageEnding;

let PrintIndexString = CurrentKanjiPageIndex + 1;

document.getElementById("IFRAME").src = CurrentKanji;

document.getElementById('CIndex').innerHTML = " | Current Index: " + PrintIndexString.toString() + " | ";

function isInBookmarksArray() {

  for(let x = 0; x < BookmarkedKanjiGradeANDIndex.length; x++){

    if(BookmarkedKanjiGradeANDIndex[x][0] == CurrentKanjiGrade){

      if(BookmarkedKanjiGradeANDIndex[x][1] == CurrentKanjiPageIndex){

        return true;

      }

    }

  }

  return false;

}

function FetchTheNextKanji(){

  if (CurrentKanjiPageIndex + 1 < AllJishoKanjiPages[CurrentKanjiGrade - 1].length){

    CurrentKanjiPageIndex++;

  }

  else {

    CurrentKanjiPageIndex = 0;

  }

  CurrentKanji = KanjiPageBeginning + AllJishoKanjiPages[CurrentKanjiGrade - 1][CurrentKanjiPageIndex] + KanjiPageEnding;

  document.getElementById("IFRAME").src = CurrentKanji;

  PrintIndexString = CurrentKanjiPageIndex + 1;
  document.getElementById('CIndex').innerHTML = "Current Index: " + PrintIndexString.toString();
  document.getElementById('Bookmarked').checked = isInBookmarksArray();

}

function FetchThePreviousKanji(){

  if (CurrentKanjiPageIndex - 1 >= 0){

    CurrentKanjiPageIndex--;

  }

  else {

    CurrentKanjiPageIndex = AllJishoKanjiPages[CurrentKanjiGrade - 1].length - 1;

  }

  CurrentKanji = KanjiPageBeginning + AllJishoKanjiPages[CurrentKanjiGrade - 1][CurrentKanjiPageIndex] + KanjiPageEnding;

  document.getElementById("IFRAME").src = CurrentKanji;

  PrintIndexString = CurrentKanjiPageIndex + 1;
  document.getElementById('CIndex').innerHTML = "Current Index: " + PrintIndexString.toString();
  document.getElementById('Bookmarked').checked = isInBookmarksArray();

}

function LoadGradeLevel(){

  let GradeSelect = document.getElementById('GradeLevel');
  let SelectedGradeText = GradeSelect.value;

  if(SelectedGradeText == "One"){

    CurrentKanjiGrade = 1;

  }
  else if(SelectedGradeText == "Two"){

    CurrentKanjiGrade = 2;

  }
  else if(SelectedGradeText == "Three"){

    CurrentKanjiGrade = 3;

  }
  else if(SelectedGradeText == "Four"){

    CurrentKanjiGrade = 4;

  }
  else if(SelectedGradeText == "Five"){

    CurrentKanjiGrade = 5;

  }
  else if(SelectedGradeText == "Six"){

    CurrentKanjiGrade = 6;

  }
  else{

    console.log(SelectedGradeText);
  }

  CurrentKanjiPageIndex = -1;

  FetchTheNextKanji();

}

function isInRangeInc(Num, Min, Max){

  if (Num >= Num && Num <= Max){

    return true;

  }

  return false;

}

function JumpToIndex(){

  let ChosenIndexString = document.getElementById('Choose').value;

  let ChosenIndex = parseInt(ChosenIndexString);

  if (isInRangeInc(ChosenIndex, 1, AllJishoKanjiPages[CurrentKanjiGrade - 1].length)){

    CurrentKanjiPageIndex = ChosenIndex - 2;

    FetchTheNextKanji();

    document.getElementById('Choose').value = "";

  }

}

let GrandCookieString = "";

function ParseCookieString(CookieString){

  let Grade = "";
  let HowManyChars = "";
  let LoopValue = 0;
  let IndexStr = "";

  let GradeIndexStrPair = [];
  let GradesANDIndexesStr = [];

  while(CookieString.length > 0){

    Grade = CookieString[0];
    HowManyChars = CookieString[1];

    CookieString = CookieString.substring(1);
    CookieString = CookieString.substring(1);
    LoopValue = parseInt(HowManyChars);

    for(let i = 0; i < LoopValue; i++){

      IndexStr += CookieString[0];
      CookieString = CookieString.substring(1);

    }

    GradeIndexStrPair.push(Grade);
    GradeIndexStrPair.push(IndexStr);

    GradesANDIndexesStr.push(GradeIndexStrPair);
    GradeIndexStrPair = [];
    IndexStr = "";

  }

  return GradesANDIndexesStr;

}

function LoadChecks(){

  let CurrentPair = [CurrentKanjiGrade, CurrentKanjiPageIndex];

  if(isInBookmarksArray()){

    document.getElementById("Bookmarked").checked = true;

  }

  else{

    document.getElementById("Bookmarked").checked = false;

  }

  /*
  console.log("Current Grade-Index Pair: " + CurrentPair);

  for (let u = 0; u < BookmarkedKanjiGradeANDIndex.length; u++){

    console.log("Current BookmarkedKanjiGradeIndex[u]'th value: " + BookmarkedKanjiGradeANDIndex[u]);

    if(isInBookmarksArray(CurrentPair, BookmarkedKanjiGradeANDIndex)){

      document.getElementById("Bookmarked").checked = true;
      break;

    }

  }

  document.getElementById("Bookmarked").checked = false;*/

}

function LoadBookmarkedKanjis(){

  let KanjiDataPair = [];
  BookmarkedKanjiGradeANDIndex = [];

  let ReadGrade = 0;
  let ReadIndex = 0;

  let CookieParsedData = [];

  // Read Cookie and have the string

  console.log("GC at the beginning of LoadBookmarkedKanjis(): " + GrandCookieString);

  //GrandCookieString = GetCookie();

  console.log("GC after the GetCookie function returned in LoadBookmarkedKanjis() [Supposed to be updated]: " + GrandCookieString);

  CookieParsedData = ParseCookieString(GrandCookieString);

  for(let j = 0; j < CookieParsedData.length; j++){

    ReadGrade = parseInt(CookieParsedData[j][0]);
    ReadIndex = parseInt(CookieParsedData[j][1]);

    KanjiDataPair.push(ReadGrade);
    KanjiDataPair.push(ReadIndex);


    BookmarkedKanjiGradeANDIndex.push(KanjiDataPair);
    KanjiDataPair = [];

  }

  console.log(BookmarkedKanjiGradeANDIndex);

  LoadChecks();

  // Use the data to load bookmarks selection

}

let ChosenBookmarkedKanjiPosCode = CurrentKanjiGrade.toString() + CurrentKanjiPageIndex.toString();

function ManageBookmarksLive(){

  let Check = document.getElementById('Bookmarked').checked;
  console.log("Checked: " + Check);

  if(Check){

    WriteBookmarkAsCookie();

  }
  else{

    DeleteBookmark();

  }

}

function WriteBookmarkAsCookie() {

  if(!isInBookmarksArray()){

    let NewCookieValue = CurrentKanjiGrade.toString() + CurrentKanjiPageIndex.toString().length.toString() + CurrentKanjiPageIndex.toString();

    GrandCookieString = GetCookie();

    GrandCookieString += NewCookieValue;

    SetCookie(GrandCookieString, 3650);

    LoadBookmarkedKanjis();

  }

}

function DeparseArrayIntoCookieString(){

  let SoonToBeGrandCookieString = "";
  let IndexStr = "";

  for(let n = 0; n < BookmarkedKanjiGradeANDIndex.length; n++){

    SoonToBeGrandCookieString += BookmarkedKanjiGradeANDIndex[n][0].toString();

    IndexStr = BookmarkedKanjiGradeANDIndex[n][1].toString();

    SoonToBeGrandCookieString += IndexStr.length;

    SoonToBeGrandCookieString += IndexStr;

  }

  return SoonToBeGrandCookieString;


}

function ArrayHasArray(ToBeFoundArray, BaseArray) {

  for(let h = 0; h < BaseArray.length; h++){

    if(BaseArray[h][0] == ToBeFoundArray[0] && BaseArray[h][1] == ToBeFoundArray[1]){

      return true;

    }

  }

  return false;

}

function DeleteBookmark(){

  let BookmarkedKanjisEdited = [];

  let CurrentKanjiDataPair = [CurrentKanjiGrade, CurrentKanjiPageIndex];

  for(let p = 0; p < BookmarkedKanjiGradeANDIndex.length; p++){

    if(ArrayHasArray(CurrentKanjiDataPair, BookmarkedKanjiGradeANDIndex)){

      for(let v = 0; v < BookmarkedKanjiGradeANDIndex.length; v++){

        if(v != p){

          BookmarkedKanjisEdited.push(BookmarkedKanjiGradeANDIndex[v]);

        }

      }

    }

    break;

  }

  BookmarkedKanjiGradeANDIndex = BookmarkedKanjisEdited;

  GrandCookieString = DeparseArrayIntoCookieString();

  SetCookie(GrandCookieString, 3650);

  LoadBookmarkedKanjis();

}
