## ES6

https://babeljs.io/repl/  在线转码

### let

* let 声明一个变量， 只在let命令所在的代码块有效（非常适合在for循环中）
* let没有变量提升， 这意味着typeof不再是百分比安全的操作
* 只要在块级作用域中存在let命令，它所在声明的变量就绑定（binding）在这个区域， 不受外界影响
* 暂时性死区：在代码块内使用let命令声明变量之前， 该变量都是不可用的
* let 不允许在相同作用域内重复声明同一个变量
* 可以使用let很方便的块级作用域 （IIFE）


### const

* 用来声明常量，一旦声明，其值不可修改（很多规则跟let一样，理解成继承吧）
* 必须一声明就立即初始化，不能留到以后赋值
* 对于复杂的数据结构（对象，数组）， const只能保证保存该数据的地址不发生变化，不能保证其内部值发生变化。（可以使用Object.freeze()冻结对象）


### 变量的解构赋值

* 解构： ES6按照一定模式，从数组和对象中提取值，对变量进行赋值，这称为解构
* 数组
  * var [a,b,c] = [1,2,3]; //a=1,b=2,c=3
  * var [head,,third,...tail]=[1,2,3,4]; //tail=[4]
  * var [foo] = [];//如果解构不成功，变量的值就等于undefined
  * let [a,[b],d] = [1,[2,3],4]; //b=2;不完全解构，解构依然可以成功
  * 如果等号右边不是数组（可遍历的结构）就会报错；
  * 默认值：
     * let [x,y=1] = [0]; //x=0,y=1;
     * let [x,y=1,z] = [0, undefined,2]; //x=0,y=1,z=2;（必须使用undefined/，因为es6内部使用严格等===）
     * 惰性求值， 如果默认值是表达式， 只用用的时候才求值
* 对象
  * 对象没有次序，变量必须和属性同名或使用以下方式,才能取得正确的值
     * var {foo:baz} = {foo: 1, bar: 2}; //baz=1; 
* 字符串
  * 因为字符串自带length属性，
     * let {length: len} = 'jifag';
  * 字符串被转换为类似数组的对象
     * const [a,b,c,d,e] = 'hello'; //a='h',b='e'...
  * 解构可以嵌套
     * var {p: [x,{y}]} = {p:['hello',{y:'world'}]}; // x='hello',y='world';此时p是模式不是变量名 
* 函数参数的解构赋值
  * 酷！ 
* 圆括号问题
  * 对于编译器来说， 一个式子是模式还是表达式，没有办法从一开始就知道，带来的问题就是， 如果模式中出现圆括号怎么处理。
  * 建议： 不要在模式中放圆括号
  * 几种情况下在模式中使用圆括号会报错
* 用途！！！！
  * 交换变量的值  [x,y] = [y,x]; 
  * 获取从函数返回的多个值  var [a,b,c] = test(); //test return [1,2,3];
  * 函数参数的定义
     * eg1: 参数是有序值function f([x,y,z]){}; f([1,2,3])
     * eg2: 参数是无序值function f({x,y,z}){}; f({x:1,y:2,z=3})
  * 提取json数据
  * 函数参数的默认值（好用！！！）
  * let {log, sin, cos} = Math; //很方便就能把想用的拿出来  


### reg
* u修饰符： 用于处理4个字节的utf=16编码， 如（根本打不出来， 浏览器跟markdown也显示不了好伐， 这个问题忽略）
* y修饰符： ‘粘连’ 跟g一样是全局匹配， 但g是从上一次匹配的剩余位置开始匹配，y限制了只能从剩余位置的**第一位**匹配

	    var str = 'aaa_aa_a', g = /a+/g, y = /a+/y;
	    g.exec(str); //执行两次， ['aaa'],['aa']
	    y.exec(str); //执行两次， ['aaa'],null


### Array
* 
* () //将类数组（array like）对象和可遍历的对象转化为真正的数组,接受第二次参数类似于数组的map函数Array.from({'0':1, '1': 2, '2': 3}, x => x * x) //[1,4,9];
* 扩展运算符 (...)
* Array.of()  //将一组值转化为数组 Array.of(1,2,3) //[1,2,3]
* 数组实例 Array.prototype.copyWithin(target, start = 0, end = this.length): 在数组内部将指定位置的成员复制到其他位置（覆盖）
* 数组实例 Array.prototype.find()和findIndex();
   * find（function(value, index, arr){}）有点像filter， find只找到第一个符合条件的值就返回这个值 findIndex返回该值的位置
* 数组实例 Array.prototype.fill(value, start = 0, end = this.length) //很方便的初始化空数组，如果不是空数组， 数组中已有的元素将被重置 new Array(3).fill(0) //[0,0,0]
* 数组实例 Array.prototype.entries(),keys(),values() 返回遍历器对象
* 数组实例 Array.includes() 返回布尔值
* 数据推导 [for (year of years) if (year > 2000) year];


### 函数
* rest参数(...变量名)： 替代arguments function add(...value){}
* 扩展运算符(...) 像reset参数的逆运算
   * console.log(...[1,2,3]) //1 2 3 (1,2,3)
   * 替代数组的apply方法
   * 合并数组 [1,2,...more] //more=[3,4];
   * 与解构赋值结合  const [first, ...rest] = [1,2,3,4];//first=1,rest=[2,3,4];
* 箭头函数
   * var sum = (num1, num2) => num1 + num2;
   * 如果函数内代码语句多于一行，要用大括号括起来，并使用return返回
   * 简化回调函数 [1,2,3].map(x => x * x); //[1,4,9]; [6,1,8].sort((a,b) => a - b); //[1,6,8]; const number = (...nums) => nums; // number(1,2,3)=>[1,2,3]
   
### 对象
* 属性的简洁表示法 let obj = {x,test(){}}
* 属性名表达式 let obj = {['a' + 'b']: 'ab'}
* 属性名表达式与简洁表示法不能同时使用，会报错
* Object.is()用来比较两个值是否严格相等，与严格等（===）的行为基本一致，不同之处只有两个
   * +0不等于-0
   * NaN等于自身
* Object.assign(): 用来将源对象的所有可枚举属性赋值到目标对象 //Object.assign(target, source1, source2); 

### Symbol

		var f = Symbol('foo');
		
		var a = {};
		var b = {};
		
		a[f] = 'a[f]';
		b.f = 'b.f';
		
		Object.assign(b, a);
		
		console.log(b[f], b.f); //'a[f]', 'b.f'

* ES6引用一种新的原始数据类型Symbol表示独一无二的值
* let s = Symbol();typeof s;//symbol **没有‘new’**
* let s = Symbol('foo'),a={};a[s] = function(){};//不能使用点运算符（a.s）,不加引号（a['s']）;
* Symbol的参数是没有实际意义的，只表示对Symbol实例的描述，主要是为了方便区分
* symbol可以用来定义一组常量，保证这组常量的值都是不相等的
* 魔术字符串：在代码之中多次出现、与代码行程强耦合的某一个集体的字符串或数值。
   * 消除魔术字符串的常用方便就是把它写成一个常量， 此时比较适合用Symbol 
* Symbol类型的属性名，不会出现在for...in、for...of遍历中，也不会被Object.keys(),Object.getOwnPropertyNames()返回。也不是私有属性。Object.getOwnPropertySymbols可以获取指定对象的所有Symbol属性名
* Symbol.for(name):重新使用同一个symbol值
   * var s1 = Symbol.for('foo'), s2 = Symbol.for('foo');s1 === s2; //true
   * var s1 = Symbol('foo'), s2 = Symbol.for('foo');s1 === s2; //false
* 内置的Symbol值

## Proxy和Reflect
* proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，属于“元程序”（对编程语言进行编程）。代理器，拦截器
* 作为构造函数Proxy接受两个参数，第一个参数是所要代理的目标对象，第二个参数是配置对象（包含有处理函数），**要使Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象**

		var proxy = new Proxy({},{
		  get: function(target, property){
		     return 35;
		  }
		});

        proxy.time; //35

	* set();利用Proxy，可以将读取属性的操作转变为执行某个函数，从而实现属性的链式调用
	
			var pipe = (function() {
			  var pipe;
			  return function(value) {
			    get: function(pipeObject, fnName) {
			      if(fnName == 'get') {
			        return pipe.reduce(function(val, fn) {
			          return fn(val);
			        }, value);
			      }
			
			      pipe.push(window[fnName]);
			      return pipeObject;
			    }
			  }
			});
	
	* Proxy中设置set方法可以拦截某个属性的赋值操作
	
			let validator = {
			  set: function(obj, prop, value) {
			    if(prop === 'age'){
			      if(!Number.isInteger(value)) {
			        throw(new TypeError('The age is not an integer'));
			      }
			      
			      if(value > 200) {
			        throw new RangeError('The age seems invalid');
			      }
			    }
			    
			    obj[prop] = value;
			  }
			}
			
			let person = new Proxy({}, validator);
			
			person.age = 100;
			person.age = 400;//报错
	* apply()方法拦截函数的调用
	* has()方法可以隐藏某些属性不被in操作符发现
	* construct()方法用来拦截new命令
	* deleteProperty()方法拦截delete操作
	* defineProperty()方法拦截Object.defineProperty();
	* enumerate()方法拦截for...in循环
	* ownKeys()方法拦截Object.keys()
* Reflect 将Object某些语言层面的方法部署到Reflect之中

### set
* 新的数据结构，类似于数组，成员的值都是唯一的，没有重复的值
* set函数可以接受一个数组（或类数组）let set = new Set([1,2,3,3]); [...set]; //[1,2,3]
* 属性和方法set.prototype.size ,add(value), delete(value), has(value), clear()
* 遍历操作 keys(),values(),entries(),forEach();前三个返回遍历器。set结构只有键值没有键名，keys的返回值等于values
* WeakSet 内部成员只能是对象，不可遍历，没有clear方法，没有size属性，引用为存储dom节点，不必担心这些节点从文档移除时会引发内存泄漏（没有理解……）

### Map
* 理解： Object提供“字符串——值”的对应，Map提供“值——值”的对应
* map接收一个数组作为参数，数组的成员为一个个表示键值对的数组； 	

		var map = new Map([['name', 'Jack'], ['age', '12']]);
		map.size; //2
		map.has('name'); //true
		map.get('name'); //jack
		map.set('gender', 'female'); // 
		map.delete('age');
		map.clear();
* WeakMap: 只接收对象为键名（null除外）。同样应用于dom， 部署私有属性

### Iterator
* 遍历器，是一种接口，为各种不同的数据结构提供统一的接口的访问机制，任何数据结构只要部署iterator接口就可以完成遍历操作
* 不断调用next方法 返回（{value:value, done: Boolean}）
* for...of 循环
* 一个数据结构只要具有Symbol.iterator属性，就被认为是可遍历的。调用Symbol.iterator方法就可以得到当前结构的遍历函数
* 以下三种结构原生具有iterator接口： 数组， 某些类似数组的对象， set和map结构

		var map = new Map([['name', 'aya'], ['gender', 'female']]);
		var iter1= map[Symbol.iterator]();
		iter1.next(); // Object {"done": false,"value": Array ["name","aya"]}

		//类数组调用Symbol.iterator
		let iterable = {
		  '0': 1,
		  '1': 2,
		  '2': 3,
		  length: 3,
		  [Symbol.iterator]: Array.prototype[Symbol.iterator]
		};
		
		let ite =  iterable[Symbol.iterator]();
		console.log(ite.next());


* 对象没有默认部署iterator接口，是因为哪个属性先遍历哪个后遍历是不确定的。需要开发者手动指定

		// 为对象添加Iterator的一个实例
		let obj = {
		  data: ['hello','world'],
		  [Symbol.iterator]() {
		    const self = this;
		    let index = 0;
		    return {
		      next() {
		        if(index < self.data.length) {
		          return {
		            value: self.data[index++],
		            done: false
		          };
		        }else {
		          return {
		            value: undefined,
		            done: true
		          };
		        }
		      }
		    }
		  }
		}
		
		for(let j of obj){
		  console.log(j);
		}
		
		var i = obj[Symbol.iterator]();
		i.next(); //'hello';

* 调用Iterator接口的场合
   * 解构赋值（会默认调用Symbol.iterator方法）
   * 扩展运算符（...）
   *  for...of,Array.from(),Map、Set、WeakMap、WeakSet,Promise.all(),Promise.race();
* 字符串可以访问Sybmol.iterator方法
* for...of(遍历所有数据结构的统一方法)

### Generator
* 概念： Generator是ES6提供的一种异步编程解决方案。状态机。执行Generator会返回一个遍历器对象。
* function与函数名之间有一个*号， 函数内部使用yield定义不同的内部状态
* yeild就像是暂停标志，generator.next()执行一次就从就返回一个{value:yeild语句后的值,done:}，并暂停向下执行，再执行.next()方法再返回再暂停，直到遇到return语句为止，没有return就放回{value: undefined, done: true};
* yeild后面的表达式，只有当调用next方法，内部指针指向语句时才会执行（惰性求值）
* yeild语句不能出现在普通函数中（foreach改为使用for循环），yield语句如果在表达式中，必须加圆括号
* next的参数，会被当做上一条yield语句的返回值
* for...of,扩展运算符，解构赋值，Array.from
* 应用
   *  异步操作的同步化表达： 处理异步操作，改写回调函数
   *  
			function* main(){
			  var result = yield request("http://some.url.com");
			  var resp = JSON.parse(result);
			  doSomething(resp);
			}
   * 在任意对象上部署Iterator接口
   * 
			function* iterEntries(obj) {
			  let keys = Object.keys(obj);
			  for(let i = 0; i < keys.length; i++) {
			    let key = keys[i];
			    yield [key, [obj[key]]];
			  }
			}
			let testObj = {hello: 'you', world: 'me'};
			for(let [key,value] of iterEntries(testObj)){
			  console.log(key, value);
			}
   * 作为数据结构
   * 
			function* doStuff(){
			  yield fs.readFile.bind(null, 'hello.txt');
			  yield fs.readFile.bind(null, 'work.txt');
			  yield fs.readFile.bind(null, 'as-so-on.txt');
			}

### Promise
* 一个对象，用来传递异步操作消息
* 有两个特点
   * 对象的状态不受外界干扰。Pending,Resolved(Fulfilled),Rejected。只有异步操作的结果可以决定当前是哪一种状态。
   * 一旦状态改变就不会再变，任何时候都可以得到这个结果。promise只能从Pending变为Resolved或Pending变成Rejected。只要一种变化发生就不会再发生变化
* 实例方法then, catch
* Promise.all() 将多个Promise实例包装成一个新的promise实例 promise.all([p1,p2,p3]);
* Promise.race() 同样将多个promise实例包装成一个新的promise实例 promise.race([p1,p2,p3]);
   * 区别： all方法，只有参数p全部变成resolved，p才为resolved（rejected同样）；race方法，只要有一个参数变成resolved，p就变为resolved（rejected同样）；
* Promise.resolve() 将现有对象转为promise对象
   * promise对象可以不带参数， 如果希望得到一个新的promise对象，可以直接调用 var p = Promise.resolve();
* Promise.reject() 返回一个新的promise对象，状态为Rejected
* promise.done() 总是处于回调链的尾端，保证抛出任何可能出现的错误
* promise.finally() 跟promise.done最大的区别的是： finally接受普通函数作为参数，无论如何都会执行

### 异步操作
* ES6的异步编程： 回调函数，事件监听， 发布/订阅， Promise对象
* 异步： 一个任何分为两段，先执行第一段，然后转而这行其他认识，等做好准备再回头执行第二段（不连续的操作）
* Thunk函数： 编译器的传名调用（如var m = 1; f(m+1)，//m+1在f内用到才求值，而不是先求值再调用f(2)），实现往事先将函数放到一个临时函数中，再将这个临时函数传入函数体。这个临时函数就叫Thunk函数。
* js是传值调用（var m = 1; f(m+1);// 先求值等于2，在调用f(2)；Thunk函数替换的不是表达式而是多参数函数，替换为单参数版本，且只接受回调函数作为参数。


### Class基本语法
	class Point{
	  
	  constructor(x, y) {
	    this.x = x;
	    this.y =y;
	  }
	  
	  toString(){
	    return "x+y= " + this.x + this.y;
	  }
	}

* 语法糖
* 类的内部定义的所有方法都是不可枚举的（跟ES5不同）
* constructor方法是类的默认方法，new之后自动调用该函数
* 如果忘记加new调用Class，会报错
* Class表达式
* 
		const MyClass = class Me {
		  getClassName(){
		    return Me.name;
		  }
		}
* 调用时使用new MyClass();Me只供Class的内部代码使用
* 不存在变量提升
* 代码内部为严格模式
* extends 实现继承
   * 
			class ColorPoint extends Point {
			  constructor(x, y, color) {
			    super(x, y);
			    this.color = color;
			  }
			}
   
   * super: 关键字，指代了父类的实例（即父类的this对象）
   * 子类必须在constructor方法中调用super， 否则新建实例时会报错。因为如果不调用super方法，子类就得不到this对象
   * 父类只要用prototype就能被子类继承， 父类可以是任意函数
   * 对象总是继承其他对象的，所以可以再任意一个对象中使用super关键字
* static 静态方法：在方法前面添加static关键字，不会被实例继承，通过类直接调用 
* Class只有静态方法没有静态属性
* new.target属性: 返回new命令所作用的构造函数（在构造函数中使用）


### 修饰器
* 类的修饰（Class）
   * 修饰器是一个表达式，用于修改类的行为
   * 修饰器本质是能在编译时执行的函数
   * 修饰器函数可以接受3个参数： 目标函数（必要），属性名，该属性的描述对象
* 方法的修饰（Class 内部方法）
* 不能用于普通的函数（因为函数提升）
* @autobind  @override @deprecate


### Module
* Class只是语法糖，并没有解决模块化问题
* Module应对大型程序


### 编码风格
* 块级作用域let代替var
* 全局变量应该只能设置常量，优先使用const
* 静态字符串使用单引号或反引号，动态字符串使用反引号（`）
* 解构赋值
   * 使用数组成语对变量赋值，优先使用解构赋值
   * 函数的参数如果是对象的成员，优先使用解构赋值
   * 如果函数返回多个值，优先使用对象的解构赋值而不是数组的解构赋值（便于调整顺序）
* 对象
   * 单行定义的对象，最后一个成员不以逗号结尾；多行定义的对象，最后一个成员使用逗号结尾
   * 对象尽量静态化，如果属性不可避免要添加，使用Object.assign()方法
   * 如果对象的属性名是动态的，创建对象时使用属性表达式定义 
* 使用扩展运算符(...)复制数组
* 函数
   * 立即执行函数可以写成箭头函数的形式
   * 
			(() => {
			  doSomething();
			});  
   * 使用函数表达式的场合尽量用箭头函数代替（绑定了this）
   * 简单的单行的不会复用的函数用箭头函数
   * 所有的配置项都应该几种在一个对象，放在最后一个参数，布尔值不可以直接作为参数
   * 总是使用Class代替需要prototype的操作（class写法更简洁）
   * 使用extends实现继承


 
