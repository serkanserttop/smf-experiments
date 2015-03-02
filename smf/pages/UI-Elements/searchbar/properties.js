barStyle
height
icon
left
placeHolder
setActionView
setShowsCancel
stickToNavigationBar
text
tintColor
top
width
Var mySearch = new SMF.UI.SearchBar();
   mySearch.icon = "ic_action_search.png"; // Android Only
   Pages.Page1.add(mySearch);
   mySearch.actionView = true;
   mySearch.text = "",
   mySearch.placeHolder = "Search the text";
   mySearch.barStyle = SMF.UI.SearchBarStyle.blackOpaque // iOS Only
   if(mySearch.text=='')
   {
 mySearch.cancel();  
}