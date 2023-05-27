var names=new Array();
names[0]="Yaakov";
names[1]="Zaara";
names[2]="Joseph";
names[3]="stephen";
names[4]="paul";
names[5]="rose";
names[6]="Bakeley";
names[7]="jessy";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
