import React from 'react'
import Carouse from 'Carouse'
import MenuBox from 'MenuBox'
import Titlebar from 'Titlebar'
import style from './index.styl'
import Dialog from 'material-ui/Dialog'

const foods=[
	[
		{
			src:require("./IMG_2314-22_s.jpg"),
			title:"招牌红汤锅",
			info:"特点：数十种中药材和上等辅料炒制而成，汤色棕红晶莹，其味麻、辣、香、鲜，兼宜适口，诱人垂涎欲滴。"
		},
		{
			src:require("./IMG_2331-30_s.jpg"),
			title:"滋补鸳鸯锅",
			info:"&emsp;&emsp;白味：选用现代工艺萃取的滋补保健食材提取物，为核心原料；结合新鲜肉类浓缩骨汤为汤底，色泽自然乳白，口感鲜香浓郁；可根据喜好搭配不同的特色味碟均可，配合芝麻酱更佳<br><br>&emsp;&emsp;红味：选用优质干辣椒，青花椒为主要原材料，辅以多种天然香辛料，采用现代化的工艺设备，精心搭配、炒制而成；色泽鲜红，口味香辣浓郁；可任意配搭多种特色酱料或搭配使用蒜泥麻油碟味道更佳<br><br>&emsp;&emsp;注：部份菜品非统一售卖，具体售卖菜品以店内菜单为准。"
		},
		{
			src:require("./IMG_2363-39_s.jpg"),
			title:"绝代双椒锅",
			info:"红椒、青椒两种味型放入鸳鸯锅中，犹如太极八卦，颜色分明，青椒与红椒的混合香味入鼻诱人。"
		},
		{
			src:require("./IMG_2391-48_s.jpg"),
			title:"鸳鸯锅",
			info:"&emsp;&emsp;白味：选用现代工艺萃取的滋补保健食材提取物，为核心原料；结合新鲜肉类浓缩骨汤为汤底，色泽自然乳白，口感鲜香浓郁；可根据喜好搭配不同的特色味碟均可，配合芝麻酱更佳<br><br>&emsp;&emsp;红味：选用优质干辣椒，青花椒为主要原材料，辅以多种天然香辛料，采用现代化的工艺设备，精心搭配、炒制而成；色泽鲜红，口味香辣浓郁；可任意配搭多种特色酱料或搭配使用蒜泥麻油碟味道更佳<br><br>&emsp;&emsp;注：部份菜品非统一售卖，具体售卖菜品以店内菜单为准。"
		},
		{
			src:require("./IMG_2407-54_s.jpg"),
			title:"酸菜菌汤鸳鸯锅",
			info:"采用优质酸菜，麻辣咸酸，膏汤、菌类、酸菜一起出来，浓香诱人，质嫩色白，醒酒开胃。"
		},
		{
			src:require("./IMG_2424-63_s.jpg"),
			title:"番茄酸菜筒骨三味锅",
			info:"&emsp;&emsp;选用现代工艺萃取的滋补保健食材提取物，为核心原料；结合新鲜肉类浓缩骨汤为汤底，色泽自然乳白，口感鲜香浓郁；全程冷链配送的猪蹄骨为原料，结合我公司自行研发的汤锅料包，采用高温、高压的方式制作而成，蹄花耙软化渣、肥而不腻、滋补味浓；可根据喜好搭配不同的特色味碟均可，配合芝麻酱更佳<br><br>&emsp;&emsp;注：部份菜品非统一售卖，具体售卖菜品以店内菜单为准。"
		},
	],[
		{
			src:require("./IMG_2373-42_s.jpg"),
			title:"激情椒麻鱼",
			info:"该底料通体绿色，具有天然绿色，清香宜人，味不上身；采用植物清油，比牛油更健康，口感麻味绵长，辣而不燥，是一款具有划时代意义的新型火锅底料。"
		},
		{
			src:require("./IMG_2393-49_s.jpg"),
			title:"农家酸菜鱼",
			info:"特色:酸菜经过三年老坛盐水泡制而成，烘干脱水后，爽口有嚼劲，口味更加独特，做出来的鱼火锅汤色黄亮，微辣不腻，鱼片嫩黄爽滑，香味韵于浓汤，酸菜鲜中溢芳； 酸菜中的乳酸能开胃提神、醒酒去腻，还能增进食欲、帮助消化，可促进人体对铁元素的吸收。"
		},
		{
			src:require("./IMG_2384-45_s.jpg"),
			title:"招牌红汤锅",
			info:"特点：数十种中药材和上等辅料炒制而成，汤色棕红晶莹，其味麻、辣、香、鲜，兼宜适口，诱人垂涎欲滴。"
		},
		{
			src:require("./IMG_2378-43_s.jpg"),
			title:"开胃山椒鱼",
			info:"特色：有句民谣：“最白最白的，要数冬天雪。最甜最甜的，要数白糖甘蔗。最香最美的，要数酸汤鱼。”采用上等野山椒烹出自然酸汤，荤厚而酸辣，色泽嫩黄，入口酸味鲜美，令人胃口大开。"
		}
	],[
		{
			src:require("./IMG_2327-28_s.jpg"),
			title:"骨肉相连",
			info:"一串上有多块软骨、多块鸡肉，滚揉后串上竹签，再用电脑控制的烘烤箱经过特殊工艺烤制而成。味道有些辣，还有淡淡的甜味。"
		},
		{
			src:require("./IMG_2421-60_s.jpg"),
			title:"美味鸭肠",
			info:"选自市场每天新鲜屠宰的鸭子，采用流水清洗、去油等工艺，口感脆嫩。锅开后采用“七上八下”的手法涮烫15左右即可食用。"
		},
		{
			src:require("./s1.jpg"),
			title:"毛血旺",
			info:"起源于重庆，流行于重庆和四川地区，是一道著名的传统菜式，列入川菜菜谱之一，以鸭血为制作主料，毛血旺的烹饪技巧以煮菜为主，口味属于麻辣味"
		},
		{
			src:require("./s2.jpg"),
			title:"冷锅鱼",
			info:"精选长江上游无污染水域的花鲢鱼，均系当年所产，体重严格控制在1.8-2.5斤，其鱼肉质细嫩；锅底用20多种原料秘制的大料配以各种鲜料单锅现炒而成。"
		},
	],[
		{
			src:require("./cp2.jpg"),
			info:"特色：牛蛙鲜嫩可口，口感微辣微麻、适中醇和不燥、口味适众、色泽红亮、色味俱全之特点"
		},
		{
			src:require("./cp3.jpg"),
			info:"特色：老少皆宜，去湿开胃，四季可食、 理气、 舒血、滋补，因健康美味深受大众喜爱。提前秘料腌渍入味，辅配特有香辣配料，川菜风味醇厚，入口香辣脆绵，回味长久，是佐餐、饮酒、团聚首选理想餐饮新宠。"
		},
		{
			src:require("./cp4.jpg"),
			info:"特色：耗儿鱼有二绝，一绝  先炸后烧的耗儿鱼火候拿捏的都分毫不差，色泽金黄耀眼，外皮焦香酥脆，内里肉软鲜嫩化渣而富有质感；二绝  调味与众不同，香、甜、咸、鲜、麻、辣俱全，风味盎然，一旦吃上便欲罢不能。"
		},
		{
			src:require("./cp5.jpg"),
			info:"特色：鱼皮完整漂亮，鱼肉紧实鲜美很入味，骨头也酥酥的，就连配菜也是好吃得不得了。"
		},
	],[
		{
			src:require("./IMG_2265-11_s.jpg"),
			title:"精品味碟"
		},
		{
			src:require("./IMG_2282-18_s.jpg"),
			title:"精品味碟"
		},
		{
			src:require("./IMG_2269-14_s.jpg"),
			title:"精品味碟"
		},
		{
			src:require("./IMG_2268-13_s.jpg"),
			title:"精品味碟"
		},
		{
			src:require("./IMG_2275-15_s.jpg"),
			title:"精品味碟"
		},
		{
			src:require("./IMG_2283-19_s.jpg"),
			title:"精品味碟"
		},			
	]
]

class Foods extends React.Component{
	state={select:null}
	render(){
		var {data}=this.props
		var {select}=this.state
		return (
			<div className={style.foods}>
				<Dialog title={select&&select.title} open={select!=null} modal={false} onRequestClose={()=>this.setState({select:null})}>
					{select&&(
						<div className={style.viewer}>
							<img src={select.src} className={style.full} />
							<div className={style.info}>
								<div className={style.title}>{select.title}</div>
								{select.info&&<p dangerouslySetInnerHTML={{__html:select.info}}></p>}
							</div>
						</div>
					)}
				</Dialog>
				{data.map((it,i)=>(
					<div key={i} className={style.food} onClick={()=>this.setState({select:it})}>
						<img src={it.src} />
						{it.title&&<div className={style.text}>{it.title}</div>}
					</div>
				))}
			</div>
		)
	}
}


const data=[
	{to:'classics',text:'经典火锅',component:()=>(
		<div>
			<Titlebar title="经典火锅" info="Classics hot pot" />
			<Foods data={foods[0]} />
		</div>
	)},
	{to:'cold',text:'特色冷锅',component:()=>(
		<div>
			<Titlebar title="特色冷锅" info="Classics cold pot" />
			<Foods data={foods[1]} />
		</div>
	)},
	{to:'vegetable',text:'美食菜品',component:()=>(
		<div>
			<Titlebar title="美食菜品" info="Dish type" />
			<Foods data={foods[2]} />
		</div>
	)},
	{to:'dry',text:'特色干锅',component:()=>(
		<div>
			<Titlebar title="特色干锅" info="Classics dry pot" />
			<Foods data={foods[3]} />
		</div>
	)},
	{to:'dish',text:'自助味碟',component:()=>(
		<div>
			<Titlebar title="自助味碟" info="Self-service dish" />
			<Foods data={foods[4]} />
		</div>
	)},
]

export default ({match})=>(
	<div>
		<Carouse />
		<MenuBox data={data} match={match} />
	</div>
)