function toggleTurnOff(e){for(var t=document.getElementsByName("turnoff"),a=0,i=t.length;i>a;a++)t[a].checked=e.checked,updateDb(t[a])}function togglePause(e){for(var t=document.getElementsByName("pause"),a=0,i=t.length;i>a;a++)t[a].checked=e.checked,updateDb(t[a])}function toggleSleep(e){for(var t=document.getElementsByName("sleep"),a=0,i=t.length;i>a;a++)t[a].checked=e.checked,updateDb(t[a])}function updateDb(e){var t,a=$(e).prop("id"),i=a.split("-"),s=i[0],n=refData.child("-"+i[2]+"/habitData/settings/");t=1==$(e).prop("checked")?"1":"0",0==s.localeCompare("sleep")?n.update({sleep:t}):0==s.localeCompare("pause")?n.update({pause:t}):"turnoff"===s&&n.update({turnoff:t})}function addSettingOptionforHabit(e,t,a){$("#setting-list").append('<li id="'+e+'"><ul class="setting-info"><li><div class="setting-name">'+t+'</div></li></ul><ul class="notification"><li><div class="notification-type">Turn Off</div><hr></li><li><div class="notification-type">Pause</div><hr></li><li><div class="notification-type">Sleep</div></li></ul><div class="onoff"><span class="switches"><div class="onoffswitch"><input type="checkbox" class="onoffswitch-checkbox" id="turnoff-'+e+'" name="turnoff" '+a.turnoff+'" onclick="updateHabitState(this)"><label class="onoffswitch-label" for="turnoff-'+e+'"> </label></div></span><span class="switches"><div class="onoffswitch"><input type="checkbox" class="onoffswitch-checkbox" id="pause-'+e+'" name="pause" '+a.pause+' onclick="updateHabitState(this)"><label class="onoffswitch-label" for="pause-'+e+'"></label></div></span><span class="switches"><div class="onoffswitch" ><input type="checkbox" class="onoffswitch-checkbox" id="sleep-'+e+'" name="sleep" '+a.sleep+' onclick="updateHabitState(this)"><label class="onoffswitch-label" for="sleep-'+e+'"></label></div></span></div></li>')}function updateHabitState(e){var t,a=$(e).prop("id"),i=a.split("-"),s=i[0],n=refData.child("-"+i[2]+"/habitData/settings/");t=1==$(e).prop("checked")?"1":"0",0==s.localeCompare("sleep")?n.update({sleep:t}):0==s.localeCompare("pause")?n.update({pause:t}):"turnoff"===s&&n.update({turnoff:t})}var refData=new Firebase("https://jjb750uy9yj.firebaseio-demo.com/habits/"),habitSettingList=[],habitSettingObject={};$(document).ready(function(){refData.on("child_added",function(e){var t=e.val().habitData,a=e.name();t.hasOwnProperty("name")&&(name=t.name?t.name:"",name.trim().length>0&&(habitSettingObject[a]=name));var i={};for(var s in t.settings)"0"===t.settings[s]?i[s]="":i[s]="checked";addSettingOptionforHabit(a,name,i)})});