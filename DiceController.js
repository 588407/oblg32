	

	class DiceController{
		constructor (root){
			this.root = root;
			this.diceoutput = null;
			this.dice = new Dice();
			
			this.roll = this.roll.bind(this);
			this.run = this.run.bind(this);
		}
		
		roll(){
			this.dice.roll;
			this.diceoutput.innerText = this.dice.value;
			
		}
	run(){ 
		this.diceoutput = this.dice.value;
	let btRef=document.getElementById(this.root).getElementsByTagName("button")[0];
	btRef=addEventListener("click",this.roll,true);
	this.dice.roll();
}

	}
	const controller = new DiceController("root");
		document.addEventListener("DOMContentLoaded",controller.run,true);
	