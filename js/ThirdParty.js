var ThirdParty = {

centerHorizontally: true,
centerVertically: true,
showRotateHint: true,
enableFullscreenToggle: true,
enableCloudHiscores: true,

// Called when all assets have been loaded
loadingComplete: function()
{
	 //console.log('API: loadingComplete');
},

// Called when the main menu is showed
mainMenu: function()
{
	//console.log('API: mainMenu');
},

gameHelp: function()
{
},

// Called when the game (first level) starts
gameStart: function()
{
},

// Called when a level is completed
levelComplete: function(level)
{
},

// Called when game over
gameOver: function()
{
},

// Called when game is restarted
restartGame: function()
{
	//console.log('API: restartGame');
},

// Called when game is completed (all levels completed)
gameComplete: function()
{
},

showLeaderboard: function()
{
	//console.log('API: showLeaderboard');
	GameHiscore.leaderBoard();
},

// Called when user is ready to submit a score.
submitScore: function(score)
{
	GameHiscore.submitScore(score);
}

};

