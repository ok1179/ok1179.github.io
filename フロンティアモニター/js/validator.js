/**
 * ブラウザ側で利用するためのメッセージリスト
 *
 *
 */

var MSG = Array();


//※追加する場合、ｻｰﾊﾞ側の定義（sfmsg.propery）とJS側の定義（validator.js）を、同ーメッセージとすること
//（メッセージ同期ツールあり）

//INFO
MSG['I000'] = 'xxxx';
MSG['I001'] = '[#item#]を登録しました。';
MSG['I002'] = '[#item#]を削除しました。';
MSG['I003'] = '[#item#]メールを送信しました。';
MSG['I004'] = '製番が確認できました。';
MSG['I005'] = '承認が完了しました。';
MSG['I006'] = 'ログアウトしました。';
MSG['I007'] = 'リセット要求を行いました。';
MSG['I008'] = 'ホームサーバを停止しました。';
MSG['I009'] = 'パスワードを変更しました。';

MSG['I401'] = '仮パスワードが発行されています。送信されたメールアドレスにてパスワード変更を行うか、もう一度、仮パスワードを発行してください。';
MSG['I601'] = '仮パスワードが発行されています。送信されたメールアドレスにてパスワード変更を行うか、もう一度、仮パスワードを発行してください。';

//QUESTUION
MSG['Q001'] = '[#item#]を削除しますがよろしいですか？';
MSG['Q002'] = '製番が未設定に変更されていますがよろしいですか？';
MSG['Q003'] = '受注番号が未設定に変更されていますがよろしいですか？';
//ERROR
MSG['E001'] = '登録できませんでした。 [E001]';
MSG['E002'] = '削除できませんでした。 [E002]';
MSG['E003'] = '製番または認証番号が正しくありません。 [E003]';
MSG['E004'] = '接続時間がタイムアウトになりました。 [E004]';
MSG['E005'] = 'この[#item#]は既に更新されています。 [E005]';
MSG['E006'] = '登録済の[#item#]です。 [E006]';
MSG['E007'] = 'ログインできません。存在しない[#item#]です。 [E007]';
MSG['E008'] = 'ログインできません。正しいパスワードを入力してください。 [E008]';
MSG['E009'] = 'アカウントロックされました。[#item#]に連絡してください。 [E009]';
MSG['E010'] = '製番は既にユーザ登録済みです。 [E010]';
MSG['E011'] = '製番は変更されています。製番確認を行ってください。 [E011]';
MSG['E012'] = '[#item#]は存在しません。 [E012]';
MSG['E013'] = 'エラーが発生しました。管理者にご連絡ください。 [E013]';
MSG['E014'] = 'データが見つかりません。 [E014]';
MSG['E015'] = 'システムは現在メンテナンス中です。 [E015]';
MSG['E016'] = 'メールを送信できませんでした。 [E016]';
MSG['E017'] = '該当するデータが存在しないためCSV出力できません。 [E017]';
MSG['E018'] = 'パスワード変更URLは無効かこの[#item#]は現在利用できません。 [E018]';
MSG['E019'] = 'この[#item#]は既に削除されています。 [E019]';
MSG['E020'] = 'この[#item#]は現在編集中のため変更できません。 [E020]';
MSG['E021'] = 'アクセスしたURLが正しくありません。 [E021]';
MSG['E022'] = '登録されていない[#item#]です。 [E022]';
MSG['E023'] = '仮パスワードは既に有効ではないかURLが正しくありません。 [E023]';
MSG['E024'] = 'ただ今、大変混みあっています。 [E024]';
MSG['E025'] = 'この設置先情報は削除できません。 [E025]';
MSG['E026'] = '受注番号が登録されていないホームサーバは製番確認できません。 [E026]';
MSG['E027'] = '受注番号は現在利用中のため未設定には変更できません。 [E027]';
MSG['E028'] = '入力されたデモ用IDが重複しています。入力しなおしてください。[E028]';
MSG['E029'] = 'デモ用IDを自動設定することができません。前画面で入力してください。[E029]';
MSG['E801'] = '[#item#]を入力してください。 [E801]';
MSG['E802'] = '[#item#]には数値を入力してください。 [E802]';
MSG['E803'] = '[#item#]には正しい日付を入力してください。 [E803]';
MSG['E804'] = '[#item#]には半角文字を入力してください。 [E804]';
MSG['E805'] = '[#item#]に入力した値は不正です。 [E805]';
MSG['E806'] = '[#item#]は[#val#]文字以内で入力してください。 [E806]';
MSG['E807'] = '[#item#]は正しいメールアドレスを入力してください。 [E807]';
MSG['E808'] = '[#item#]には正しい時間を入力してください。 [E808]';
MSG['E809'] = '[#item#]が間違っています。 [E809]';
MSG['E810'] = '[#item#]には0から360までの数字を入力してください。 [E810]';
MSG['E811'] = '[#item#]には0以上の数字を入力してください。 [E811]';
MSG['E812'] = '[#item#]には[#val#]文字以上入力してください。 [E812]';
MSG['E813'] = '[#item#]には全角カナを入力してください。 [E813]';
MSG['E814'] = '現在のパスワードと異なるパスワードを入力してください。 [E814]';
MSG['E815'] = '[#item#]には半角英数字を入力してください。 [E815]';
MSG['E820'] = '[#item#]には数値（整数または小数）を入力してください。 [E820]';
MSG['E821'] = '[#item#]には数値（整数）を入力してください。 [E821]';
MSG['E822'] = '[#item#]には小数第[#val#]位までの数値を入力してください。 [E822]';
MSG['E823'] = '[#item#]には[#val#]より小さい数値を入力してください。 [E823]';
MSG['E824'] = '[#item#]には[#val#]より大きい数値を入力してください。 [E824]';
MSG['E825'] = '[#item#]には[#val#]以下の数値を入力してください。 [E825]';
MSG['E826'] = '[#item#]には[#val#]以上の数値を入力してください。 [E826]';
MSG['E900'] = '[#item#]は項目の数が正しくありません。 [E900]';
MSG['E901'] = '[#item#]は必須項目です。 [E901]';
MSG['E902'] = '[#item#]は数字ではありません。 [E902]';
MSG['E903'] = '[#item#]は日付([#val#])ではありません。 [E903]';
MSG['E904'] = '[#item#]は半角文字ではありません。 [E904]';
MSG['E905'] = '[#item#]は不正な文字が含まれています。 [E905]';
MSG['E906'] = '[#item#]は最大文字数([#val#]文字)を超えています。 [E906]';
MSG['E907'] = '[#item#]は[#val#]文字のみ有効です。 [E907]';
MSG['E910'] = '[#item#]は[#val#]が登録済です。 [E910]';
MSG['E911'] = '[#item#]は[#val#]が未登録です。 [E911]';


//LOG
MSG['L401'] = 'システムエラーが発生しました。エラー詳細：[#item#]';
MSG['L402'] = 'システムエラーが発生しました。ログイン情報が複数レコード存在します。テーブル名：[#item1#] ログインID：[#item2#]';
MSG['L403'] = 'システムエラーが発生しました。有効期間開始日が取得できません。テーブル名：[#item1#] ログインID：[#item2#]';

MSG['L601'] = 'システムエラーが発生しました。エラー詳細：[#item#]';
MSG['L602'] = 'システムエラーが発生しました。ログイン情報が複数レコード存在します。テーブル名：[#item1#] ログインID：[#item2#]';

//PC

MSG['E401'] = 'ログインIDまたはパスワードが正しくありません。 [E401]';
MSG['E402'] = 'コールセンタでメンテナンス中です。しばらくしてから、再度、お客様情報「修正する」をクリックして修正を行ってください。 [E402]';
MSG['E403'] = '[%1]を入力してください。 [E403]';
MSG['E404'] = '[%1]には、半角英数字（[%2]）を入力してください。 [E404]';
MSG['E405'] = '[%1]には、半角数字（[%2]）を入力してください。 [E405]';
MSG['E406'] = '[%1]には、半角文字（[%2]）を入力してください。 [E406]';
MSG['E407'] = '[%1]は、[%2]の範囲で入力してください。 [E407]';
MSG['E408'] = '[%1]に、不正な文字が入力されています。 [E408]';
MSG['E409'] = 'メールアドレスの形式が正しくありません。正しいメールアドレスの形式で入力してください。 [E409]';
MSG['E410'] = 'パスワードを変更する場合は、現在のパスワード、新しいパスワード、新しいパスワード(確認)全ての項目を入力してください。 [E410]';
MSG['E411'] = '新しいパスワードには、現在のパスワードと異なるパスワードを入力してください。 [E411]';
MSG['E412'] = '新しいパスワード(確認)には、新しいパスワードと同じパスワードを入力してください。 [E412]';
MSG['E413'] = '画像の変更に失敗しました。JPEG、GIF、PNG形式以外の画像、またはファイルサイズが60kバイトを超える画像は選択できません。[E413]';
MSG['E414'] = '未登録のメールアドレスが入力されています。メールアドレスには、ログインIDを入力してください。 [E414]';
MSG['E415'] = '異なるパスワードが入力されています。同じパスワードを入力してください。 [E415]';
MSG['E416'] = 'メール送信に失敗しました。しばらくしてから再度実行して下さい。 [E416]';
MSG['E417'] = 'セッションタイムアウトが発生しました。再度ログインし直してください。 [E417]';
MSG['E418'] = '現在のパスワードが間違っています。正しいパスワードを入力してください。 [E418]';
MSG['E419'] = '入力したメールアドレスは登録できません。別のメールアドレスを入力してください。 [E419]';
MSG['E420'] = 'パスワードの変更に失敗しました。もう一度、仮パスワードを発行してください。 [E420]';
MSG['E421'] = 'ご指定の条件に該当するデータはありませんでした。 [E421]';
MSG['E422'] = '入力された製番または認証コードが誤っています。 [E422]';
MSG['E423'] = 'ただいまメンテナンス中です。ブラウザを閉じて、しばらくしてから、再度操作を行ってください。 [E423]';
MSG['E424'] = '[#item#]には、小数第[#val#]位までの数値を入力してください。 [E424]';
MSG['E425'] = '=入力された[#item#]が誤っています。 [E425]';
MSG['E426'] = '=入力された[#item#]は既に使用されています。 [E426]';
MSG['E427'] = '入力されたメールアドレスが違います。<br>再度、メールアドレスを入力してください。 [E427]';
MSG['E428'] = 'メール送信に失敗しました。<br>しばらくしてから再度実行して下さい。 [E428]';
MSG['E431'] = 'メールアドレスとメールアドレス（再入力）が一致していません。メールアドレスを確認後、メールアドレスを入力しなおしてください。 [E431]';
MSG['I401'] = '仮パスワードが発行されています。送信されたメールアドレスにてパスワード変更を行うか、もう一度、仮パスワードを発行してください。';
MSG['I402'] = 'メールを送信しました。';
MSG['I403'] = '長期間パスワードの変更がありません。<br>セキュリティーを考慮して変更をおすすめします。';
MSG['I404'] = '確認のため、再度、メールアドレスを入力してください。';
MSG['I405'] = 'パスワードを変更しました。変更を確定するには、「確定する」をクリックしてください。';
MSG['L401'] = 'システムエラーが発生しました。エラー詳細：[%1]';
MSG['L402'] = 'システムエラーが発生しました。有効期限情報が取得できません。ユーザシーケンス：[%1]';
MSG['L403'] = 'システムエラーが発生しました。設置先情報が取得できません。ユーザシーケンス：[%1]';
MSG['L404'] = 'システムエラーが発生しました。ホームサーバ情報が取得できません。ユーザシーケンス：[%1]';

//MOBILE
MSG['E601'] = 'ログインIDまたはパスワードが正しくありません。 [E601]';
MSG['E602'] = '[%1]を入力してください。 [E602]';
MSG['E603'] = '[%1]には、半角英数字（[%2]）を入力してください。 [E603]';
MSG['E604'] = '[%1]には、半角文字（[%2]）を入力してください。 [E604]';
MSG['I601'] = '仮パスワードが発行されています。送信されたメールアドレスにてパスワード変更を行うか、もう一度、仮パスワードを発行してください。';
MSG['L601'] = 'システムエラーが発生しました。エラー詳細：[%1]';
MSG['L602'] = 'システムエラーが発生しました。有効期限情報が取得できません。ユーザシーケンス：[%1]';
MSG['L603'] = 'システムエラーが発生しました。設置先情報が取得できません。ユーザシーケンス：[%1]';
MSG['L604'] = 'システムエラーが発生しました。ホームサーバ情報が取得できません。ユーザシーケンス：[%1]';



/**
 * 入力チェック処理共通クラス
 *
 *  入力値の一括チェックを行う
 *
 * 一括チェック内での各チェック処理を静的に呼び出すことが出来る
 * （その場合、エラーコードのみを返却し、エラーメッセージは作成は行われない）
 */

//デバッグ用フラグ
var isJsDebugEnabled = false;

var validatorDebugLog = "";

var MSG_ID_EMPTY ='';


/** チェックする項目名（日本語）*/
var VALI_PRIVATE_itemName = "";
/** チェックする値 */
var VALI_PRIVATE_temValue = "";

/** メッセージID */
var VALI_PRIVATE_messageId = "";
/** メッセージ */
var VALI_PRIVATE_message = "";


/**
 * チェックする項目を設定する
 * （設定した際に、前回チェックした項目の情報をリセットする）
 * @param value
 * @param itemName
 */
function setNewItem(itemValue, itemName)
{
	validatorDebugLog = "";

	VALI_PRIVATE_itemName  = itemName;
	VALI_PRIVATE_itemValue = itemValue;

	VALI_PRIVATE_message   = "";
	VALI_PRIVATE_messageId = "";

	//デバッグ
	debugItem();
}

   /**
* 次のチェックする項目を設定する
* （前回チェックした項目のエラー情報を継続する）
* @param value
* @param itemName
*/
function setNextItem(itemValue, itemName)
{
	VALI_PRIVATE_itemName  = itemName;
	VALI_PRIVATE_itemValue = itemValue;

	//デバッグ
	debugItem();
}

	/**
 * 必須チェック　正常のの場合trueを返す
 */
function chkBrank()
{
	var id=  chkBrankByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("必須チェック　　",id);

	return VALI_PRIVATE_isOk(id)
}

/**
 * 半角文字チェック　正常のの場合trueを返す
 */
function chkHan()
{
	var id=  chkHanByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("半角チェック　　",id);

	return VALI_PRIVATE_isOk(id)
}

/**
 * 半角数字チェック　正常のの場合trueを返す
 */
function chkHanNumber()
{
	var id=  chkHanNumberByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("半角数字チェック",id);

	return VALI_PRIVATE_isOk(id);
}

/**
 * 半角英数字チェック　正常のの場合trueを返す
 */
function chkHanAlphaNum()
{
	var id=  chkHanAlphaNumByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("半角英数字チェック",id);

	return VALI_PRIVATE_isOk(id);
}

/**
 * 文字数チェック　正常のの場合trueを返す
 */
function chkLength(maxLen)
{
	var id= chkLengthByValue(VALI_PRIVATE_itemValue, maxLen);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName , maxLen);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("文字数チェック(" + maxLen +")",id);

	return VALI_PRIVATE_isOk(id)
}


/**
 * 文字数チェック　正常のの場合trueを返す
 */
function chkLengthMin(minLen)
{
	var id= chkLengthMinByValue(VALI_PRIVATE_itemValue, minLen);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName , minLen);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("最小文字数チェック(" + minLen +")",id);

	return VALI_PRIVATE_isOk(id)
}

/**
 * バイト数チェック　正常のの場合trueを返す
 */
function chkByteLength(length)
{
	var id= chkByteLengthByValue(VALI_PRIVATE_itemValue, length);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName, length);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("バイト数チェック(" + length +")",id);

	return VALI_PRIVATE_isOk(id)
}

/**
 *日付チェック　正常のの場合trueを返す
 */
function chkDateFormat()
{
	var id=  chkDateFormatByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("日付チェック(YYYY/MM/DD)",id);

	VALI_PRIVATE_isOk(id)
}

/**
 *日付チェック　正常のの場合trueを返す
 */
function chkTimeFormat()
{
	var id=  chkTimeFormatByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("時間チェック(HH:mm)",id);



	VALI_PRIVATE_isOk(id)
}

/**
 *禁則文字チェック　正常のの場合trueを返す
 */
function chkEscapeString()
{
	var id1 = chkEscapeStringHtmlByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id1) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id1, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id1;

	}

	var id2 = chkEscapeStringDbByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id2) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id2, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id2;

	}

    //デバッグ
    debugErr("禁則文字チェック(HTML)",id1);
    debugErr("禁則文字チェック(DB)",id2);


	return (VALI_PRIVATE_isOk(id1) && VALI_PRIVATE_isOk(id2));
}

/**
* 半角カナチェック　正常のの場合trueを返す
*/
function chkHanKana()
{
	var id=  chkHanKanaByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

   //デバッグ
   debugErr("半角カナチェック",id);

	return VALI_PRIVATE_isOk(id);
}

/**
 *メールチェック　正常のの場合trueを返す
 */


function chkEMail()
{
	var id= chkEMailByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;

	}

    //デバッグ
    debugErr("Eメールチェック",id);

	return VALI_PRIVATE_isOk(id);
}


/**
 *外部でチェックした結果を設定し判定する
 */
function chkOther(myMessageId , myMessage)
{
	var id = myMessageId;

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = myMessage;
		VALI_PRIVATE_messageId = id;

	}

    //デバッグ
    debugErr("外部チェック",id);

	return VALI_PRIVATE_isOk(id);

}

/**
*
* IDからエラー正常を判定する
*
* エラーの場合、メッセージ情報を格納する、但し格納済の場合、既存を優先
*
* @param msgId
*/
function VALI_PRIVATE_isOk(msgId)
{
  var isError = true;;

  //エラーの判定
  if ("" != msgId)
  {
     isError = false;
  }
  return isError;
}

function VALI_PRIVATE_isFirstError()
{
  if ("" == VALI_PRIVATE_messageId)
  {
	  return true;
  }

  return false;
}





//
//function VALI_PRIVATE_isOk(msgId)
//{
//   var isError = false;
//
//   //エラーの判定
//   if (MSG_ID_EMPTY != msgId)
//   {
//      isError = true;
//   }
//
//   //メッセージ情報を格納、但し格納済の場合、既存を優先
//
//   if (isError)
//   {
//	  if (MSG_ID_EMPTY == VALI_PRIVATE_messageId)
//      {
//    	 VALI_PRIVATE_messageId = msgId;
//    	 VALI_PRIVATE_message  = getMessage(msgId, VALI_PRIVATE_itemName);
//      }
//   }
//
//   return isError;
//}


/**
 * エラーメッセージIDを取得する
 *
 * 連続でチェックした場合は、最初にエラーとなったメッセージ
 */
   function getCheckErrorMessageId()
   {
	   return VALI_PRIVATE_messageId;
   }

	/**
 * エラーメッセージを取得する
 *
 * 連続でチェックした場合は、最初にエラーとなったメッセージ
 */
   function getCheckErrorMessage()
   {
	   return VALI_PRIVATE_message;
   }


   /**
* チェック結果を取得する（エラーの場合True）
*
*/
   function  isCheckError()
   {
      if (MSG_ID_EMPTY == VALI_PRIVATE_messageId)
      {
         return false;
      }

      return true;
   }


   /**
    *
    * 空欄チェック 正常の場合、trueを返す 入力済の場合、falseを返す
    *
    * @param value
    *           チェック対象値
    * @param name
    *           項目名称
    * @return
    */
function isBrank (value)
{
    if (value != null)
	{
         if (value.length != 0)
         {
            return false;
         }
	}
		return true;
	}

/**
 *
    * 必須入力チェック 未入力の場合、エラーコードE801を返す 正常の場合、OKを返す
    *
    * @param value
    *           チェック対象値
    * @param name
    *           項目名称
 * @return
 */
function chkBrankByValue (value)
{
	var errCd = 'E801';

	if (!isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	return errCd;
}

 /**
 *
 * 必須入力チェック（選択項目）
 * 未入力の場合、メッセージを表示しエラーコードを返す
 * 正常の場合、OKを返す
 * @param value チェック対象値
 * @param name 項目名称
 * @return
 */
 function chkBrankPdByValue (value)
 {
 	var errCd = 'E001';
 	if (!isBrank(value) && value !="-")
 	{
 		return NML_CD;
 	}

 	showMsg(name,errCd);
 	return errCd;
 }
/**
    * 半角文字チェック 1文字以上、全角を含む場合、エラーコードE804を返す 正常の場合、OKを返す
    * チェック対象の値が空白　またが　Nullの場合、チェック対象外（正常で返す）
    *
    * @param value
    *           チェック対象値
    * @param name
    *           項目名称
 * @return
 */

function chkHanByValue(value)
{
	var errCd = 'E804';
	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	for(var i=0; i<value.length; i++){
        //1文字づつエスケープし、長さが4文字以上なら全角
       if (isZen(value.charCodeAt(i)))
       {
        	return errCd;
       }
    }
	return MSG_ID_EMPTY;
}

/**
 * 半角文字チェック
 * 1文字以上の全角文字を含む場合、メッセージを表示しエラーコードを返す
 * 正常の場合、OKを返す
 * @param value チェック対象値
 * @param name 項目名称
 * @return
 */

function chkHanNumberByValue (value)
{
	var errCd = 'E802';

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

    if (value.match(/[0-9]+/g) != value)
    {
		return errCd;
    }
return MSG_ID_EMPTY;
}

/**
 * 半角英数字チェック
 * 数字英数字以外の場合、メッセージを表示しエラーコードE815を返す
 * 正常の場合、OKを返す
 * @param value チェック対象値
 * @param name 項目名称
 * @return
 */

function chkHanAlphaNumByValue (value)
{
	var errCd = 'E815';

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

    if (value.match(/[0-9a-zA-Z]+/g) != value)
    {
		return errCd;
    }
return MSG_ID_EMPTY;
}

/**
 * 禁止記号チェック
 * 禁止記号【"&<>',～】が含まれていない場合、OKを返す
    * （htmlで問題がある記号を対象）
    *
    * @param value
    *           チェック対象値
 * @return
 */
function chkEscapeStringHtmlByValue(value)
{
	errCd = 'E805';
	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	if (value.match(/[\&\<\>\',～]+/g) != null)
	{
			return errCd;
	}
	return MSG_ID_EMPTY;
}

/**
 * 禁止記号チェック
 * 禁止記号【\"'】が含まれていない場合、OKを返す
    * （sqlで問題がある記号を対象）
    *
    * @param value
    *           チェック対象値
 * @return
 */
function chkEscapeStringDbByValue(value)
{
	errCd = 'E805';
	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	if (value.match(/[\"\'\\]+/g) != null)
	{
			return errCd;
	}
	return MSG_ID_EMPTY;
}


/**
 * 禁止記号チェック
 * 禁止記号【\"'】が含まれていない場合、OKを返す
    * （sqlで問題がある記号を対象）
    *
    * @param value
    *           チェック対象値
 * @return
 */
function chkHanKanaByValue(value)
{
	errCd = 'E805';
	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	if (value.match(/[[ｱ-ﾝﾞﾟ｡｢｣､･]+/g) != null)
	{
			return errCd;
	}
	return MSG_ID_EMPTY;
}





/**
    * レングス数チェック 文字数が指定文字数を超える場合、エラーコードE806を返す 正常の場合、OKを返す
    * チェック対象の値が空白　または　Nullの場合、チェック対象外（正常で返す）
    *
    * @param value
    *           チェック対象値
    * @param maxLen
    *           最大文字数
    * @param name
    *           項目名称
* @return
*/
function chkLengthByValue(value, maxLen)
{
	var errCd = 'E806';
	var cnt = 0;

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	if (value.length > maxLen)
	{
		return errCd;
	}
	return MSG_ID_EMPTY;
}

/**
 * 最小レングス数チェック 文字数が指定文字数より小さい場合、エラーコードE812を返す 正常の場合、OKを返す
 * チェック対象の値が空白　または　Nullの場合、チェック対象外（正常で返す）
 *
 * @param value
 *           チェック対象値
 * @param maxLen
 *           最大文字数
 * @param name
 *           項目名称
* @return
*/
function chkLengthMinByValue(value, minLen)
{
	var errCd = 'E812';
	var cnt = 0;

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	if (value.length < minLen)
	{
		return errCd;
	}
	return MSG_ID_EMPTY;
}

/**
    * バイト数チェック 文字バイト数が指定バイト数を超える場合、エラーコードE806を返す 正常の場合、OKを返す
    * チェック対象の値が空白　または　Nullの場合、チェック対象外（正常で返す）
    *
    * @param value
    *           チェック対象値
    * @param maxLen
    *           最大バイト数
    * @param name
    *           項目名称
* @return
*/
function chkByteLengthByValue(value, maxLen)
{
	var errCd = 'E806';
	var cnt = 0;

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	for(var i=0; i<value.length; i++){
        //1文字づつエスケープし、長さが4文字以上なら全角
        if (isZen(value.charCodeAt(i)))
        {
     	   cnt = cnt + 1;
        }
    cnt = cnt + 1;
    }

	if (cnt > maxLen)
	{
		return errCd;
	}

	return MSG_ID_EMPTY;

}

function isZen(c)
{
	if ( (c >= 0x0 && c < 0x80) || (c >= 0xff61 && c < 0xffa0)) {
		return false;
	}
	return true;
}


///**
//* 日付チェック
//* @param yyyy/mm/dd形式
//* @return true:有効（空文字の場合true）
//* 		  false:無効
//*/
function chkDateFormatByValue(value)
{
	var errCd = 'E803';

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	//YYYY/MM/DDの形式であること
	if (value.length == 10 && value.split("/").length == 3)
	{
		//先頭10文字を日付単位に分割　日付関数と比較し正しい日付である事
		var Y = value.substring(0,4);
		var M = value.substring(5,7);
		var D = value.substring(8,10);

		var dt = new Date(Y,M - 1,D);
		if (Y == dt.getYear() &&
			M == dt.getMonth() + 1 &&
			D == dt.getDate()
			)
		{
			return MSG_ID_EMPTY;
		}

    }
	return errCd;

}

///**
//* 時間チェック
//* @param hh;mm形式
//* @return true:有効（空文字の場合true）
//* 		  false:無効
//*/
function chkTimeFormatByValue(value)
{
	var errCd = 'E808';

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}
	//HH:mm形式であること
	if (value.length != 5) return errCd;
	if (value.split(":").length != 2) return errCd;

	var H = -1;
	var M = -1;

	try
	{
		H = Number(value.substring(0,2));
		M = Number(value.substring(3,5));
	}
	catch(e)
	{
		return errCd;
	}
	//時間（分）の範囲であること
	if (H >= 0 && H <= 23 && M >= 0  && M <= 59 )
	{
		return MSG_ID_EMPTY;
	}


	return errCd;

}
///**
// * 時刻入力の妥当性をチェック
// * 入力形式は数値4桁、24時間制で入力
// * 正常の場合OKを返す。
// * @param value チェック対象値
// * @param name 項目名称
// * @return
// */
//function chkTimeByValue (value)
//{
//	var errCd = 'E108';
//	if (value.match(/^\d{4}$/) && value.match(/^([01]?[0-9]|2[0-3])([0-5][0-9])$/)) {
//		return MSG_ID_EMPTY;
//	}
//	showMsg(name,errCd);
//	return errCd;
//}






/**
* 指定コードのメッセージをアラート表示する
* @param name
* @param cd
* @param flg
* @return
*/

function getMessage(cd, item, val)
{
	if (MSG[cd] == null)
	{
		return "";
	}

	var msg = MSG[cd].replace('[#item#]',item);

	if (val != null)
	{

		msg = msg.replace('[#val#]',val);
	}

	return msg;
}

///**
//* 指定の名称のオブジェクトを取得する(複数ある場合　または存在しない場合はエラー）
//* @param objName
//* @return
//*/
//function getElement(objName)
//{
//	var obj = document.getElementsByName(objName)
//
//	if (obj.length != 1)
//	{
//		//alertDebug("指定のオブジェクト名（" + objName +  "）は" + obj.length + "個存在します。");
//		return null;
//	}
//
//	return obj
//}


///**
//* 指定の名称のオブジェクトを取得する(複数ある場合　または存在しない場合はエラー）
//* @param objName
//* @return
//*/
//function alertDebug(msg)
//{
//	//alert(msg ,"システムエラー");
//}



function chkEMailByValue(value)
{

	var errCd = 'E807';

	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}

	 if(value.match(/[!#-9A-~]+@+[a-z0-9]+.+[^.]$/) != value)
	 {
	     return errCd;
	 }
//共通修正　20110405 メールアドレスにカンマを不正とする
	 if (value.search(",") != -1)
	 {
	     return errCd;
	 }
//共通修正　20110405 メールアドレスにカンマを不正とする
	 return MSG_ID_EMPTY;
}


/**
* チェックボックス未選択チェック
* 1件もチェックボックスが選択されていない場合、メッセージを表示しエラーコードを返す
 * 正常の場合、OKを返す
* @param chbname チェックボックス名
* @param name　項目名称
* @return
*/
function chkChbNotSel (chbname)
{

  var	errCd = 'E005';

  obj = document.all.item(chbname);

  if (obj == null) {
    return 999;
  }

  if(obj.length == null) {
    if (obj.checked)
    {
		return MSG_ID_EMPTY;
    }
  } else {
    for (i=0; i<obj.length; i++) {
      if (obj[i].checked)
      {
  		return MSG_ID_EMPTY;
      }
    }
  }
  showMsg('',errCd);
  return errCd;
}


///**
//* バイト数チェック
//* 文字バイト数が指定バイト数を超える場合、メッセージを表示しエラーコードを返す
//* 正常の場合、OKを返す
//* @param value INPUTタグ名称
//* @param maxLen 最大バイト数
//* @param name 項目名称
//* @return
//*/
//function chkByteLengthByObjName(objName)
//{
//	var inp = getElement(objName)
//	return chkByteLength(inp[0].value,inp[0].maxLength);
//
//}

/**
* 指定のパスの先頭文字の有効性チェック
* @param path
* @return true:有効（先頭文字が「\」或いは　先頭三桁は「?:\」　？：半角英字）　false:無効
* 		  false:無効(上記以外無効)
*/
function chkRealPath(path){
	if (!isBrank(path)) {
		var ch1 = path.substring(0,1);
		if (ch1 != '\\'){	//先頭'\'以外
			if(path.length < 3) return false;		//サイズが3以下の場合
			else{
				if (ch1.match(/[a-zA-Z]/g) != ch1){
					return false;
				}else{
					var ch2 = path.substring(1,2);
					var ch3 = path.substring(2,3);
					if (ch2 != ':') return false;
					else if (ch3 != '\\') return false;
				}
			}
		}
	}
	return true;
}



function debugItem()
{
   if (isJsDebugEnabled)
   {
	   validatorDebugLog += "■項目名 " + VALI_PRIVATE_itemName + " : 値 " + VALI_PRIVATE_itemValue +"\r\n";

   }
}

function debugErr(checkName , id)
{
   if (isJsDebugEnabled)
   {
	   if (id =="") id ="OK";

	   validatorDebugLog += checkName + " : 結果[" + id + "] 最初のエラー[" +  VALI_PRIVATE_messageId + "]\r\n";
   }
}

/**
 * 小数点を含む半角数値チェック　正常のの場合trueを返す
 */
 function chkDouble()
{

	var id = chkDoubleByValue(VALI_PRIVATE_itemValue);

	if (!VALI_PRIVATE_isOk(id) && VALI_PRIVATE_isFirstError())
	{
		VALI_PRIVATE_message   = getMessage(id, VALI_PRIVATE_itemName);
		VALI_PRIVATE_messageId = id;
	}

    //デバッグ
    debugErr("小数点を含む半角数値チェック",id);

	return VALI_PRIVATE_isOk(id);
}

/**
 * 小数点を含む半角数値チェック
 * 小数点を含む半角数値以外の場合、メッセージを表示しエラーコードE820を返す
 * 正常の場合、""を返す
 * @param value チェック対象値
 * @param name 項目名称
 * @return
 * @exsample
 * OK 9999 9999.1
 * NG 9999. .9999
 */
function chkDoubleByValue(value)
{
	var errCd = 'E820';
	if (isBrank(value))
	{
		return MSG_ID_EMPTY;
	}
	if (!value.match(/^-?[0-9]+([¥.]{1}[0-9]+)?$/))
	{
		return errCd;
	}
	return MSG_ID_EMPTY;
}


////必須チェック
//var REQUIRE_CHECK_MUST 				= 101;
//var REQUIRE_CHECK_NO_CHECK			= 100;
//
////半角チェック
//var HANKAKU_CHECK_HANKAKU			= 201;
//var HANKAKU_CHECK_HANKAKU_NUMBER	= 202;
//var HANKAKU_CHECK_NO_CHECK			= 200;
//
////禁則文字チェック
//var ESCAPE_CHECK_ALL				= 301;
//var ESCAPE_CHECK_DB_ONLY			= 302;
//var ESCAPE_CHECK_HTML_ONLY			= 303;
//var ESCAPE_CHECK_NO_CHECK			= 300;
//
////その他チェック
//var OTHER_CHECK_LENGTH				= 401;
//var OTHER_CHECK_DATE				= 402;
//var OTHER_CHECK_NO_CHECK			= 400;
//
//
//
// var messageId = "";
// var message   = "";
//
// /**
// *
// *  入力値 一括チェック
// *
// *  正常の場合True　エラーの場合Falseを返却する
// *
// *  関数を呼出し後、
// *  getCheckErrorMessageでエラーメッセージを取得できる
// *  getCheckErrorMessageIdでエラーコードを取得できる
// *
// * @param item       チェック対象値
// * @param name       チェック対象値の日本語名（メッセージで利用）
// * @param brankFlg   必須チェック　　　　任意 / 必須
// * @param hanType　　半角チェック　　　　半角文字 / 半角数字 / 任意
// * @param escType　　禁則文字チェック　　DB,HTML / DB / HTML / 任意
// * @param formatType その他チェック　　　最大文字数 / 日付 / チェック無し (オプション)
// * @param format     その他チェックを呼び出す場合の引数                   (オプション)
// * @throws Exception
// */
//
//function inputcheck(
//       value            // チェック対象の値
//    ,  name             // チェック対象の値　日本語名
//    ,  brankFlg         // 必須チェック
//    ,  hanType          // 半角チェック
//    ,  escType          // 禁則文字チェック
//    ,  formatType,      // 他のチェック
//       format           // 他のチェック用引数
//   )
//{
//
//	//初期化
//	messageId = "";
//	message   = "";
//
//	// 必須項目チェック
//  // ----------------------------------------------------------
//  if (brankFlg == REQUIRE_CHECK_MUST)
//  {
//     messageId = chkBrank(value);
//     if (messageId != MSG_ID_EMPTY)
//     {
//        message = getMessage(messageId, name);
//        return false;
//     }
//  }
//
//  // 全角　半角チェック
//  // ----------------------------------------------------------
//
//  switch (Number(hanType))
//  {
//    case HANKAKU_CHECK_HANKAKU:
//       messageId = chkHan(value);
//       break;
//    case HANKAKU_CHECK_HANKAKU_NUMBER:
//  	  messageId = chkHanNumber(value);
//     	break;
//  default:
//  }
//
//  if (messageId != MSG_ID_EMPTY)
//  {
//     message = getMessage(messageId, name);
//     return false;
//  }
//
//  // 禁則文字チェック
//  // ----------------------------------------------------------
//  if (escType == ESCAPE_CHECK_ALL || escType == ESCAPE_CHECK_HTML_ONLY)
//  {
//     messageId = chkEscapeStringHtml(value);
//     if (messageId != MSG_ID_EMPTY)
//     {
//        message = getMessage(messageId, name);
//        return false;
//     }
//  }
//
//  if (escType == ESCAPE_CHECK_ALL || escType == ESCAPE_CHECK_DB_ONLY)
//  {
//     messageId = chkEscapeStringDb(value);
//     if (messageId != MSG_ID_EMPTY)
//     {
//        message = getMessage(messageId, name);
//        return false;
//     }
//  }
//
//
//  // フォーマットチェック(オプション)
//  // ----------------------------------------------------------
//  if (formatType != undefined && format != undefined)
//  {
//	    switch (Number(formatType))
//	    {
//	    case OTHER_CHECK_LENGTH:
//
//	       var valLen = Number(format);
//	       messageId = chkLength(value, valLen);
//	       if (messageId != MSG_ID_EMPTY)
//	       {
//	          message = getMessage(messageId, name, valLen);
//	          return false;
//	       }
//	       break;
//	    case OTHER_CHECK_DATE:
//	       messageId = chkDateFormat(value);
//	       if (messageId != MSG_ID_EMPTY)
//	       {
//	          message = getMessage(messageId, name);
//	          return false;
//	       }
//	       break;
//	    default:
//	    }
//	}
//
//  return true;
//}