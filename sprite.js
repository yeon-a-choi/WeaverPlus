	 <!-- 자바스크립트 파일을 따로 빼려면 <script src="./파일이름.js"> -->
var 
		
		// Sprite vars //
		
		s_witch, //캐릭터
		s_dawn, //백그라운드
		s_land, //땅. 계속 움직여보이게
		s_lhand, //아래쪽 막대기
		s_shand, //윗쪽 막대기
		s_text, 
		s_esc,    //게임 종료 시 점수창
		s_splash,	//시작 화면에 띄워줬다 사라져야! 방법
		s_okBut,	//오케이버튼 (변수바꿈)
		s_snum,  //작은 글자 이미지
		s_bnum;  //큰 글자 이미지
		
		function Sprite(img, x, y, width, height) {
			this.img = img;
			this.x = x*2;
			this.y = y*2;
			this.width = width*2;
			this.height = height*2;
		};

		Sprite.prototype.draw = function(cx, x, y) { //class가 없어서 prototype으로 상속 흉내, 화면 출력
			cx.drawImage(this.img, this.x, this.y, this.width, this.height,
				x, y, this.width, this.height);
		};
		
		/**
		 * Initate all sprite
		 * 
		 * @param  {Image} img spritesheet image
		 */
		function initSprites(img) {
		
			s_witch = [									//배열, 게임 시 이미지 움직이게
				new Sprite(img, 156, 117, 28, 18),
				new Sprite(img, 156, 136, 28, 18),
				new Sprite(img, 156, 156, 28, 18)
			];
			
			s_dawn = new Sprite(img, 3, 0, 135, 114);
			s_dawn.color = "#423121"; // save background color
			s_land = new Sprite(img, 140, 0, 112,  56);
			
			s_lhand = new Sprite(img, 253, 0, 26, 200);
			s_shand = new Sprite(img, 277, 0, 26, 200);
			
			s_text = {				//객체 생성 
				GameOver:   new Sprite(img, 59, 137, 94, 18.7),
				GetReady:   new Sprite(img, 59, 156, 87, 20)
			}
			s_okBut = new Sprite(img, 119.5, 191.5, 40, 14);
		
			s_esc  = new Sprite(img, 138.5,  56, 114, 58);
			s_splash = new Sprite(img,   0, 116,  59, 49);
		
			s_snum = new Sprite(img, 0, 177.5, 6, 7);
			s_bnum = new Sprite(img, 0, 188, 7, 10);
		
			/**
			 * Draw number to cv
			 * 
			 * @param  {cvRenderingContext2D} cx context used for drawing
			 * @param  {number} x      x-position
			 * @param  {number} y      y-position
			 * @param  {number} num    number to draw
			 * @param  {number} center center to offset from
			 * @param  {number} offset padd text to draw right to left
			 */
			s_snum.draw = s_bnum.draw = function(cx, x, y, num, center, offset) { //숫자랑 이미지 맞추기
				num = num.toString();
		
				var step = this.width + 2;
				
				if (center) {
					x = center - (num.length*step-2)/2;
				}
				if (offset) {
					x += step*(offset - num.length);
				}
		
				for (var i = 0, len = num.length; i < len; i++) {
					var n = parseInt(num[i]);
					cx.drawImage(img, step*n, this.y, this.width, this.height,
						x, y, this.width, this.height)
					x += step;
				}
			}
		}