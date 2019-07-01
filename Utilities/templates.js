let config = require("./config").config


var forgotPasswordMailTemplate = {
    "from": '"Reset Password | World Coin Data" <test.techugo@gmail.com>',
    "subject": ' Forgot Password email ',
    "html": '<!doctype html><html><head><title>Reset Password | World Coin Data</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0; padding:0;"><div style="max-width:850px; margin:auto;"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td align="center" style="font-size:16px; padding:20px 0; font-family:arial; background:#000;"><img src="{{baseUrl}}/assets/images/logo.png" width="281" height="80" alt="" /></td></tr></table></td></tr><tr><td valign="top"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="text-align:center; border:1px solid #ff9545; line-height:24px;"><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;"> Welcome to World Coin Data!</td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;">WorldCoindata is cryptocurrency source with price information and news. We supply fast and reliable price information. We have listed over 400 cryptocurrencies and our platform is connected to more than 35 cryptocurrency exchanges.A new user account has been created using the email address {{email}}. Please click on the button below to activate and sign in to World Coin Data.</td></tr><tr><td style="padding:10px;"><div style="font-size:16px; font-family:arial; font-weight:bold; background-color:#ff9545;color:#fff; padding:10px;"><a href="{{baseUrl}}/reset-password?email={{email}}&token={{OTP}}" target="_blank">Reset Password</a></div></td></tr><tr><td style="font-size:16px; padding:10px; font-family:arial;">You can also copy and paste the link below in your browser:</td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;"><a href="#">{{baseUrl}}/reset-password?email={{email}}&token={{OTP}}</a> </td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;">Thank You,</td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;">World Coin Data team</td></tr><tr><td height="10"></td></tr></table></td></tr></table></div></body></html>'
}


var activationMailTemplate = {
    "from": '"World Coin Data" <test.techugo@gmail.com>',
    "subject": ' Account activation email ',
    "html": '<!doctype html><html><head><title>World Coin Data</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0; padding:0;"><div style="max-width:850px; margin:auto;"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0"><tr><td><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto;"><tr><td align="center" style="font-size:16px; padding:20px 0; font-family:arial; background:#000;"><img src="{{baseUrl}}/assets/images/logo.png" width="281" height="80" alt="" /></td></tr></table></td></tr><tr><td valign="top"><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style="text-align:center; border:1px solid #ff9545; line-height:24px;"><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;"> Welcome to World Coin Data!</td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;">WorldCoindata is cryptocurrency source with price information and news. We supply fast and reliable price information. We have listed over 400 cryptocurrencies and our platform is connected to more than 35 cryptocurrency exchanges.A new user account has been created using the email address {{email}}. Please click on the button below to activate and sign in to World Coin Data.</td></tr><tr><td style="padding:10px;"><div style="font-size:16px; font-family:arial; font-weight:bold; background-color:#ff9545;color:#fff; padding:10px;"><a href="{{baseUrl}}/verification?email={{email}}&token={{OTP}}" target="_blank">Verify Email</a></div></td></tr><tr><td style="font-size:16px; padding:10px; font-family:arial;">You can also copy and paste the link below in your browser:</td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;"><a href="#">http://13.126.131.184:5003/verification?email={{email}}&token={{OTP}}</a> </td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;">Thank You,</td></tr><tr><td style="font-size:16px; padding:10px 0px; font-family:arial;">World Coin Data team</td></tr><tr><td height="10"></td></tr></table></td></tr></table></div></body></html>'
}

module.exports = {
    activationMailTemplate: activationMailTemplate,
    forgotPasswordMailTemplate: forgotPasswordMailTemplate
};

