var count=1;
var container=document.getElementById("animal-info");
var btn=document.getElementById("btn");

btn.addEventListener("click",function(){
	var myRequest=new XMLHttpRequest();
myRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ count +'.json');
myRequest.onload=function(){
	var myData=JSON.parse(myRequest.responseText);
	giveHtml(myData);
};
myRequest.send();
count++;
if(count>1)
{
	btn.classList.add("hideme");
}
});

function giveHtml(data){
	var htmlString="";
	
	for(i=0;i<data.length;i++)
	{
		htmlString+="<p>" + data[i].name + " is a " + data[i].species + ".</p>";
	}
	
	container.insertAdjacentHTML('beforeend',htmlString);
}