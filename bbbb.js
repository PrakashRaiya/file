javascript:function checkwp(){var t=document.createElement("div");t.innerHTML='<input class="stickAdin hidden" id="stickAdin" type="checkbox"/><div class="cnoti" id="snotif"></div><label id="showbtn" class="buttonx small" for="stickAdin">Show</label><div id="fastbox"><div class="right"><label class="buttonx small" for="stickAdin">Close</label></div><p style="margin-top:0;">Type your Message <span>*</span><a href="javascript:boldmtxt()" title="Bold Message" style="font-weight: bold;color: #005094;margin-left:10px">*bold*</a> <i>&nbsp;_italic_&nbsp;</i> ~<del>strike</del>~</p><textarea class="selectable-text2" id="smessage" title="Type your Message" placeholder="Type your Message"></textarea><label for="pdelay" class="buttonx" style="background:#555;"><input type="checkbox" id="pdelay" name="auto" style="width: auto;margin-right: 5px;"/>First Link Preview</label><p>Match Message</p><textarea class="selectable-text2" id="smessagematch" title="Match Message" placeholder="Input Match Message">Match-Message</textarea><p>Delay Time<span>*</span></p><input type="number" id="sdelay" name="number" value="600" placeholder="Delay Time" required=""/><label for="autodelay" class="buttonx" style="background:#555;"><input type="checkbox" id="autodelay" name="auto" style="width: auto;margin-right: 5px;"/>Automatic Delay Time</label><label for="stoprun" class="buttonx" style="background:#555;"><input type="checkbox" id="stoprun" name="auto" style="width: auto;margin-right: 5px;"/>Stop Sending</label><p>Group Blacklist <a href="javascript:sblacklist()" title="Save Group" style="font-weight: bold;color: #005094;">(Save)</a> &#8226; <a href="javascript:ablacklist()" title="Add Group" style="font-weight: bold;color: #005094;">(Add Group)</a></p><textarea class="selectable-text2" id="blacklist" title="Group Blacklist" placeholder="Your Group Name"></textarea><p>Group Database</a></p><textarea class="selectable-text2" id="smdb" title="Group Database" placeholder="Group Database"></textarea><a id="removedatabase" class="buttonx" href="javascript:removedatabase()" title="Remove Database" style="display:none">Remove Database</a><label for="disabledtabase" class="buttonx" style="background:#555;"><input type="checkbox" id="disabledtabase" name="auto" style="width: auto;margin-right: 5px;" checked=""/>Disable Database</label><p>Group Console</p><textarea class="selectable-text2" id="gconsole" title="Group Console" placeholder="Group Console"></textarea><div class="buttonx" id="alertbox" style="background:#c50000;display:none">Plan Expire Soon...</div><div class="buttonx" id="wcomp" style="background:#2d0395;display:none">Work Is Complete!</div><div class="buttonx" id="stped" style="background:#83111b;display:none">Stopped</div><a class="buttonx" href="javascript:sendspt()" title="Send Now">Send Now</a><a id="newmsg" class="buttonx" href="javascript:newmsg()" title="New Message">New Message</a><p id="totalreport" style="font-weight:bold;color:#005094;margin:10px 0;font-size:10.50px;text-align:center">Send: <span id="tsend">0</span><span id="tspace">&#8226;</span>Already: <span id="talready">0</span><span id="tspace">&#8226;</span>Admin: <span id="tadmin">0</span><span id="tspace">&#8226;</span>Database: <span id="tdatabase">0</span><span id="tspace">&#8226;</span>Blacklist: <span id="tblacklist">0</span></p><p style="text-align: center;margin-top:16px;margin-bottom:0;font-weight:bold">Valid Till: <span id="validate" style="color:#005094;margin:0"></span>.</p></div>',document.body.appendChild(t);t=document.createElement("style");t.innerText=".stickAdin:checked ~ #showbtn{display:block}.stickAdin:checked ~ #fastbox,.tm2tP.copyable-area ._33LGR{display:none}@-webkit-keyframes slidein{0%{opacity:0}20%,50%,80%{opacity:1;bottom:62px}to{opacity:0;bottom:-200px;visibility:hidden}}@keyframes slidein{0%{opacity:0}20%,50%,80%{opacity:1;bottom:62px}to{opacity:0;bottom:-200px;vibility:hidden}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.nBIOd.tm2tP.copyable-area,._1KDb8,._20c87{display:block!important;overflow:auto!important}#fastbox .right{text-align:right}#fastbox p{margin:8px 0;font-size:12px}#fastbox p span{color:red}#fastbox p i{font-style:italic}textarea{width:100%;height:60px;padding:5px;display:block;margin:0}input{width:100%;text-align:center;vertical-align:-1px}#fastbox{width:386px;height:100%;position:fixed;right:0;top:0;z-index:9999;background:#f7f7f7;border-left:1px solid #06d755;border-bottom:1px solid #06d755;padding:14px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;overflow:auto}.buttonx{color:#fff;font-weight:500;width:100%;font-size:16px;background:purple;border-radius:5px;margin:10px 0 0;box-shadow:0 2px 5px 1px rgb(60 64 67/16%)}label,.buttonx{cursor:pointer}.buttonx.small{width:auto;display:inline-block;padding:0 15px;background:#005af0;margin:2px;font-size:12px;text-decoration:none;line-height:22px}.btnfull,.buttonx,.cnoti span{display:block;padding:10px;text-align:center}.btnfull{width:100%;font-size:22px;color:#fff;background:purple;border-radius:5px}.cnoti{display:flex;position:fixed;right:10px;bottom:0;z-index:99999}.cnoti span{position:relative;bottom:-200px;width:240px;margin:0 auto;border-radius:4px;background-color:#222;color:#fefefe;line-height:22px;opacity:0;transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-webkit-animation:slidein 2s ease forwards;animation:slidein 2s ease forwards}#fastbox p span#tspace{color:#000;margin:0 4px}#showbtn{display:none}#showbtn{position:fixed;right:0;top:0;z-index:9996}.hidden{display:none}",document.body.appendChild(t)}-1<window.location.href.indexOf("web.whatsapp")&&(checkwp(),startfun());
