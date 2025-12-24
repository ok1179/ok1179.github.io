/**
 * 画面の準備を行います
 * DocumentがReady状態の時に呼び出すこと
 * ほかにdom操作がある場合はこの処理が終わった後に実施する
 */


//飛び先仲介用属性値
var varAttr_ = "href_";
var varAttr2_ = "href2_"; //2011/06/16 add hamano

var siteName = "persite";

var solarTop_    = "http://www.solar-frontier.com/jp/";
//var solarUsage_  = "http://www.solar-frontier.com/jp/";
var solarUsage_    = "/" + siteName + "/howto/howto.html";
var solarSupprt_ = "http://www.solar-frontier.com/jp/family/support/index.html";
//var solarFaq_    = "http://www.solar-frontier.com/jp/family/qa/index.html";
var solarFaq_    = "/" + siteName + "/howto/howto.html";
var solarFaqLogin_ = "http://www.solar-frontier.com/jpn/faq/index.html";	//2012/07/02 chg kikuchi
//var solarFaqLogin_ = "http://www.solar-frontier.com/jp/frontier-monitor/index.com#fm0";// 2011/06/27 add hamano
var solarToiawase_ = "http://www.solar-frontier.com/jpn/contact/index.html";	//2012/07/02 chg kikuchi
var solarPP_     = "http://www.solar-frontier.com/jpn/aboutus/privacy/index.html";	//2012/07/02 chg kikuchi
var solarSP_     = "http://www.solar-frontier.com/jpn/aboutus/termsandconditions/index.html";	//2012/07/02 chg kikuchi
//var solarTrb_    = "http://www.solar-frontier.com/jp/family/know/qa/index.html#4";	// 20170227 TPI-H.Kanai MOD
var solarTrb_    = "http://www.solar-frontier.com/jpn/residential/faq/index.html#qa5";
// 20141115 H.Kanai ADD >> START 動作環境 利用規約 リンク追加対応
var solarENV_    = "http://www.solar-frontier.com/jpn/generals/fm/FM20111109.pdf";
var solarUP_     = "http://www.solar-frontier.com/jpn/generals/fm/fm_agreement.pdf";
// 20141115 H.Kanai ADD >> END 動作環境 利用規約 リンク追加対応
//リンククリック時の動作
function callbackOnLink()
{
	var link = $(this).attr(varAttr_);
	var link2 = $(this).attr(varAttr2_); //https対応
	var frms = $("form");

	frms.attr("action", link);
	frms.attr("method", "POST");
	//frms.filter("input[name^=actionId]").val("INIT");

	if( link2 == "C0000" || link2 == "top") { //https対応
		$("form input[name=actionId]").val("LOGOUT");
	}
	else {
		$("form input[name=actionId]").val("INIT");
	}

	//GETしないように => IE6だと動作しなくなる！
	//$(this).attr(varAttr_, "javascript:void(0)");

	if( frms.length > 0 ) {
		frms.get(0).submit();
	}
	return false;
}

//リンククリック時の動作(自画面にPOST後にサーバで遷移先に遷移)
function callbackOnLink2()
{
	var links = $(this).attr(varAttr_).split("/");
	var frms = $("form");

	//POST先を取得
	var act = frms.attr("action"); //　2011/06/15 add hamano

	var acts = act.split("/");

	frms.attr("method", "POST");


	$("form input[name=actionId]").val("INIT");

	if( $("form input[name=personalScreenId]").length == 0) {
		$("form").append("<input type='hidden' id='personalScreenId' name='personalScreenId' value='" + links[links.length - 1] + "' />");
	}
	else
	{
		$("form input[name=personalScreenId]").val(links[links.length - 1]);
	}

	//ポスト先をリクエストに設定　2011/06/15 add hamano
	if( $("form input[name=personalScreenIdFrm]").length == 0) {
		$("form").append("<input type='hidden' id='personalScreenIdFrm' name='personalScreenIdFrm' value='" + acts[acts.length - 1] + "' />");
	}
	else
	{
		$("form input[name=personalScreenIdFrm]").val(acts[acts.length - 1]);
	}

	if( frms.length > 0 ) {
		frms.get()[0].submit();
		return false;
	}

	//return false;
}


//エンターキーのサブミット禁止
function preventKeyPress()
{
	var keyHandler = function(e) {
		if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
			///alert("test");
			return false;
		}else{
			return true;
		}
	};

	//alert($('input[type=text],input[type=password]').length);
	//$('input[type=text],input[type=password]').keydown(function(e){
	$('form').keydown(function(e){
		return keyHandler(e);
	});
	//ie6だと反応しない為下記イベントもハンドル
	$('form').keypress(function(e){
		return keyHandler(e);
	});
}


//httpsを設定する
function initHttpsUrl(url)
{
	if( $("form input[name=httpsurl]").length == 0) {
		$("form").append("<input type='hidden' id='httpsurl' name='httpsurl' value='" + url + "' />");
	}
}


//actionIdが定義されていなければ作成する
function makeActionIdIfNotExists()
{
	if( $("form input[name=actionId]").length == 0) {
		$("form").append("<input type='hidden' id='actionId' name='actionId' value='' />");
	}
}

//POST
function postForm(sSelector, sUrl, fnCallback)
{
	//https対応
	//$(sSelector).attr(varAttr_, sUrl).click(fnCallback);
	var httpsurl = $("#httpsurl").val() + "/" + sUrl;
	$(sSelector).attr(varAttr_  , httpsurl ).attr(varAttr2_ , sUrl ).click(fnCallback);
}

//popup
function openForm(sSelector, sUrl)
{
	$(sSelector).attr("target","_blank").attr("href", sUrl);
}

//画面項目をサーブレット対応する
function prepForm()
{
	//エンターキーのサブミット禁止
	preventKeyPress();

	//actionIdが定義されていなければ作成する
	makeActionIdIfNotExists();

	//リンクの書き換え
	postForm("#GlobalNavi li a:eq(0)"               , "C0300", callbackOnLink2); //トップ
	// C3 M.Tanamachi Edit Start
	//postForm("#GlobalNavi li a:eq(1)"               , "C0500", callbackOnLink2); //くらべる
	//postForm("#GlobalNavi li a:eq(2)"               , "C0600", callbackOnLink2); //グラフで見る
	//postForm("#GlobalNavi li a:eq(3)"               , "C0700", callbackOnLink2); //ダウンロード
	//postForm("#GlobalNavi li a:eq(4)"               , "C0800", callbackOnLink2); //お客様情報
	postForm("#GlobalNavi li a:eq(1)"               , "C1000", callbackOnLink2); //カレンダー
	postForm("#GlobalNavi li a:eq(2)"               , "C0500", callbackOnLink2); //くらべる
	postForm("#GlobalNavi li a:eq(3)"               , "C0600", callbackOnLink2); //グラフで見る
	postForm("#GlobalNavi li a:eq(4)"               , "C0700", callbackOnLink2); //ダウンロード
	postForm("#GlobalNavi li a:eq(5)"               , "C0800", callbackOnLink2); //お客様情報
	postForm("#GlobalNavi li a:eq(6)"               , "C1100", callbackOnLink2); //蓄電池

	// カレンダー・ランキング
	postForm("#CalendarNavi li a:eq(0)"               , "C1000", callbackOnLink2); //トップ
	postForm("#CalendarNavi li a:eq(1)"               , "C1200", callbackOnLink2); //トップ
	// C3 M.Tanamachi Edit End

	//2012/12/25 add start ahamano
	//postForm("#TopNavi ul:eq(1) li a:eq(1)"         , "top", callbackOnLink); //ログアウト
	//openForm("#TopNavi ul:eq(1) li a:eq(0)"         , solarUsage_ ); //使い方
	postForm("#HeaderNavi a:eq(1)"         , "top", callbackOnLink); //ログアウト
	openForm("#HeaderNavi a:eq(0)"         , solarUsage_ ); //使い方
	//2012/12/25 add end ahamano

	//mod start
//	openForm("#BottomNavi .guideNavi li a:eq(0)"    , solarTop_   ); //ソーラーフロンティアトップ
//	openForm("#BottomNavi .guideNavi li a:eq(1)"    , solarSupprt_); //アフターサポート
//	openForm("#BottomNavi .guideNavi li a:eq(2)"    , solarFaq_   ); //よくある問い合わせ
//	openForm("#BottomNavi .guideNavi li a:eq(0)"    , solarFaq_   ); //よくある問い合わせ
//mod end
	openForm("#BottomNavi #Mobile #txtInfoLink"     , "/persite/howto/main.html#sec5" ); //携帯版　迷惑メール対策リンク
	// 20141115 H.Kanai MOD >> START 動作環境・利用規約追加対応
	//openForm("#Footer ul li a:eq(0)"                , solarPP_    ); //プライバシーポリシー
	//openForm("#Footer ul li a:eq(1)"                , solarSP_    ); //サイトポリシー
	openForm("#Footer ul li a:eq(0)"                , solarENV_   ); //動作環境
	openForm("#Footer ul li a:eq(1)"                , solarUP_    ); //利用規約
	openForm("#Footer ul li a:eq(2)"                , solarPP_    ); //プライバシーポリシー
	openForm("#Footer ul li a:eq(3)"                , solarSP_    ); //サイトポリシー
	// 20141115 H.Kanai MOD >> END 動作環境・利用規約追加対応
}


//リンクのみ
function prepFormSmall()
{
	//エンターキーのサブミット禁止
	preventKeyPress();

	//actionIdが定義されていなければ作成する
	makeActionIdIfNotExists();

	// 20141115 H.Kanai MOD >> START 動作環境・利用規約追加対応
	//openForm("#Footer ul li a:eq(0)"                , solarPP_    ); //プライバシーポリシー
	//openForm("#Footer ul li a:eq(1)"                , solarSP_    ); //サイトポリシー
	openForm("#Footer ul li a:eq(0)"                , solarENV_   ); //動作環境
	openForm("#Footer ul li a:eq(1)"                , solarUP_    ); //利用規約
	openForm("#Footer ul li a:eq(2)"                , solarPP_    ); //プライバシーポリシー
	openForm("#Footer ul li a:eq(3)"                , solarSP_    ); //サイトポリシー
	// 20141115 H.Kanai MOD >> END 動作環境・利用規約追加対応
}

//login専用
function prepFormLogin()
{
	//エンターキーのサブミット禁止
	preventKeyPress();

	//actionIdが定義されていなければ作成する
	makeActionIdIfNotExists();

	//loginのみガイドナビ
//mod start
//	openForm("#BottomNavi .guideNavi li a:eq(0)"    , solarTop_   ); //ソーラーフロンティアトップ
//	openForm("#BottomNavi .guideNavi li a:eq(1)"    , solarSupprt_); //アフターサポート
//	openForm("#BottomNavi .guideNavi li a:eq(2)"    , solarFaq_   ); //よくある問い合わせ
//	openForm("#BottomNavi .guideNavi li a:eq(0)"    , solarFaq_   ); //よくある問い合わせ
	openForm("#BottomNavi .guideNavi li a:eq(0)"    , solarFaqLogin_   ); //よくあるご質問
	openForm("#BottomNavi .guideNavi li a:eq(1)"    , solarToiawase_   ); //問合せ
//mod end
	openForm("#BottomNavi #Mobile #txtInfoLink"     , "/persite/howto/main.html#sec5" ); //携帯版　迷惑メール対策リンク
	// 20141115 H.Kanai MOD >> START 動作環境・利用規約追加対応
	//openForm("#Footer ul li a:eq(0)"                , solarPP_    ); //プライバシーポリシー
	//openForm("#Footer ul li a:eq(1)"                , solarSP_    ); //サイトポリシー
	openForm("#Footer ul li a:eq(0)"                , solarENV_   ); //動作環境
	openForm("#Footer ul li a:eq(1)"                , solarUP_    ); //利用規約
	openForm("#Footer ul li a:eq(2)"                , solarPP_    ); //プライバシーポリシー
	openForm("#Footer ul li a:eq(3)"                , solarSP_    ); //サイトポリシー
	// 20141115 H.Kanai MOD >> END 動作環境・利用規約追加対応

}

//メール送信画面
function prepFormMailSend()
{
	//エンターキーのサブミット禁止
	preventKeyPress();
	//actionIdが定義されていなければ作成する
	makeActionIdIfNotExists();

}

//問合せ画面
function prepFormFaq()
{
	//エンターキーのサブミット禁止
	preventKeyPress();

	//actionIdが定義されていなければ作成する
	//makeActionIdIfNotExists();


	$("#tukaikata").attr("target","_blank").attr("href", solarFaq_ );
	$("#koshoukana").attr("target","_blank").attr("href", solarTrb_ ); //故障かな？ページ


}


/**
 * フォームアクション書き換え
 * @param frm フォーム
 * @param targetAction アクション
 */
function replaceFormAction(frm, targetAction)
{
	if(frm == null) {
		frm = $("form:eq(0)");
	}
	frm.attr("action", targetAction);
	frm.attr("method", "POST");
}


/**
 * サブミット処理書き換え
 * @param objBtn サブミットボタン
 * @param objActionId アクションID
 * @param actionIdValue アクションID値
 */
function replaceSubmitFunc(objBtn, objActionId, actionIdValue)
{
	$(objBtn).click( function() {
		$(objActionId).val(actionIdValue);
		return true;
	})
	.submit( function() {
		return true;
	});
}



/**
 * Aタグ書き換え
 * @param objAnc
 * @param objActionId
 * @param actionIdValue
 * @returns {Boolean}
 */
function replaceSubmitFuncA(objAnc, objActionId, actionIdValue)
{
	var frms = $("form");
	objAnc.click(function() {
		objActionId.val(actionIdValue);
		if( frms.length > 0 ) {
			frms.get(0).submit();
		}
		return false;
	});
}
