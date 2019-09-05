<template>
	<view id="resume">
		<view class="resume_header"><view>人生在勤，不索何获</view></view>
		<view class="resume_intro">
			<view class="resume_person">
				<image class="resume_person_img" src="/static/resume/resume_person.png"></image>
				<view class="resume_person_item">
					<view class="resume_person_title">陈嘉福 Chen Jiafu</view>
					<view class="resume_person_text">
						<view>18649606634</view>
						<view>18649606634@163.com</view>
					</view>
					<view class="resume_person_text">
						<view>宁德师范学院 | 本科</view>
						<view>电子信息工程</view>
					</view>
				</view>
			</view>
			<view class="resume_about">
				<view class="resume_about_item">
					<view class="resume_about_title">关于我</view>
					<view class="resume_about_text">2年前端开发、前端实战经验</view>
					<view class="resume_about_text">发展方向：全栈工程师</view>
				</view>
			</view>
			<view class="resume_language">
				<view class="resume_language_item">
					<view class="resume_language_title">熟练语言</view>
					<view class="resume_language_text">
						<view>VUE</view>
						<view>IONIC</view>
						<view>UNIAPP</view>
						<view>小程序</view>
						<view>VANT</view>
						<view>ELEMENT</view>
					</view>
				</view>
			</view>
		</view>
		<view class="resume_experience">
			<view class="resume_experience_before"></view>
			项目经验
			<view class="resume_experience_after"></view>
		</view>
		<view class="resume_project">
			<view class="resume_project_content">
				<view class="resume_project_item">
					<image class="resume_project_leling" src="/static/resume/resume_leling.png"></image>
					<view class="resume_project_title">乐龄TOMP平台</view>
					<view class="resume_project_time">2018.12 - 2019.1</view>
					<!-- <view class="resume_project_text">11111111111111111111111111111111</view> -->
				</view>
				<view class="resume_project_demo" @tap="checkDemo">查看DEMO</view>
			</view>
			<view class="resume_project_content resume_project_m">
				<view class="resume_project_item">
					<image class="resume_project_youfen" src="/static/resume/resume_youfen.png"></image>
					<view class="resume_project_title">有粉商户平台</view>
					<view class="resume_project_time">2019.1 - 2019.2</view>
					<!-- <view class="resume_project_text">11111111111111111111111111111111</view> -->
				</view>
				<view class="resume_project_demo" @tap="checkDemo">查看DEMO</view>
			</view>
			<view class="resume_project_content">
				<view class="resume_project_item">
					<image class="resume_project_freeget" src="/static/resume/resume_freeget.png"></image>
					<view class="resume_project_title">FreeGetH5</view>
					<view class="resume_project_time">2019.4 - 2019.5</view>
					<!-- <view class="resume_project_text">11111111111111111111111111111111</view> -->
				</view>
				<view class="resume_project_demo" @tap="checkDemo">查看DEMO</view>
			</view>
			<view class="resume_project_content">
				<view class="resume_project_item">
					<image class="resume_project_pingjiabang" src="/static/resume/resume_pingjiabang.png"></image>
					<view class="resume_project_title">评价帮小程序</view>
					<view class="resume_project_time">2019.5 - 2019.6</view>
					<!-- <view class="resume_project_text">11111111111111111111111111111111</view> -->
				</view>
				<view class="resume_project_demo" @tap="checkDemo">查看DEMO</view>
			</view>
			<view class="resume_project_content resume_project_m">
				<view class="resume_project_item">
					<image class="resume_project_freeget" src="/static/resume/resume_freeget.png"></image>
					<view class="resume_project_title">FreeGet小程序</view>
					<view class="resume_project_time">2019.6 - 2019.7</view>
					<!-- <view class="resume_project_text">11111111111111111111111111111111</view> -->
				</view>
				<view class="resume_project_demo" @tap="checkDemo">查看DEMO</view>
			</view>
		</view>
		<view class="resume_work">
			<view class="resume_work_before"></view>
			工作经历
			<view class="resume_work_after"></view>
		</view>
		<view class="resume_company">
			<image class="resume_company_maykis" src="/static/resume/resume_company_maykis.png"></image>
			<view class="resume_company_content">
				<view class="resume_company_time">2018.12 - 至今</view>
				<view class="resume_company_title">前端开发工程师 | 厦门麦金世纪科技有限公司</view>
				<view class="resume_company_text">团队管理，电商产品管理，电子商务策划项目管理</view>
				<view class="resume_company_text">网站需求分析，产品设计，产品跟踪，及后续产品优化工作</view>
				<view class="resume_company_text">与研发、营销、客服配合，展开产品开发、销售、售后工作</view>
				<view class="resume_company_text">产品应用市场调研和分析</view>
				<view class="resume_company_text">公司品牌宣传，产品推广，负责公司网站策划和运营工作</view>
			</view>
		</view>
		<view class="resume_contact">
			<view class="resume_contact_before"></view>
			联系我
			<view class="resume_contact_after"></view>
		</view>
		<view class="resume_connection">
			<image class="resume_connection_icon" src="/static/resume/resume_person.png"></image>
			<view class="resume_connection_title">陈嘉福 Chen Jiafu</view>
			<view class="resume_connection_text">186 4960 6634</view>
			<view class="resume_connection_text">18649606634@163.com</view>
		</view>
		<view class="resume_share">
			<image @tap="qqShare" class="resume_share_qq" mode="scaleToFill" src="/static/icon/icon_qq.png"></image>
			<image @tap="wechatShare" class="resume_share_wechat" mode="scaleToFill" src="/static/icon/icon_wechat.png"></image>
			<image @tap="twitterShare" class="resume_share_twitter" mode="scaleToFill" src="/static/icon/icon_twitter.png"></image>
			<image @tap="facebookShare" class="resume_share_facebook" mode="scaleToFill" src="/static/icon/icon_facebook.png"></image>
		</view>
		<uni-popup class="resume_qrcode_popup" ref="popup" type="center">
			<view class="resume_qrcode_content">
				<view class="resume_qrcode_text">扫描二维码在微信中打开右上角分享</view>
				<image class="resume_qrcode_image" :src="QrCode"></image>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniPopup from '@/components/uni-popup/uni-popup.vue';
export default {
	components: { uniPopup },
	data() {
		return {
			QrCode: null
		};
	},
	methods: {
		// 	查看demo
		checkDemo() {
			const me = this;
			uni.showModal({
				title: '提示',
				content: '正在开发中...',
				showCancel: false
			});
		},
		// 	QQ分享
		qqShare() {
			const me = this;
			let param = {
				url: 'https://chenjf96.github.io' /*获取URL，可加上来自分享到QQ标识，方便统计*/,
				desc: '陈嘉福WEB前端开发工程师的个人博客' /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/,
				title: '谷歌不倒前端到老' /*分享标题(可选)*/,
				summary: '陈嘉福WEB前端开发工程师的个人博客' /*分享描述(可选)*/,
				pics: 'https://ws3.sinaimg.cn/large/006Xmmmggy1g6nj4k2xecj307t07tjrf.jpg' /*分享图片(可选)*/,
				flash: '' /*视频地址(可选)*/,
				site: 'QQ分享' /*分享来源 (可选) ，如：QQ分享*/
			};
			let arr = [];
			for (let i in param) {
				arr.push(i + '=' + encodeURIComponent(param[i] || ''));
			}
			let shareUrl = 'http://connect.qq.com/widget/shareqq/index.html?' + arr.join('&');
			window.open(shareUrl);
		},
		// 	微信分享
		wechatShare() {
			const me = this;
			let shareUrl = window.location.protocol + '//' + window.location.host + '?share=wechat';
			me.QrCode = me.$QR.createQrCodeImg(shareUrl);
			me.$refs.popup.open();
		},
		// 	推特分享
		twitterShare() {
			const me = this;
			let shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://chenjf96.github.io') + '谷歌不倒前端到老';
			window.open(shareUrl);
		},
		// 	脸书分享
		facebookShare() {
			const me = this;
			let shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://chenjf96.github.io');
			window.open(shareUrl);
		}
	},
	// 	监听页面加载,其参数为上个页面传递的数据,参数类型为Object(用于页面传参)
	onLoad(query) {
		const me = this;
	},
	// 	监听页面显示
	onShow() {},
	// 	监听页面隐藏
	onHide() {},
	// 	监听页面卸载
	onUnload() {},
	// 	监听页面初次渲染完成
	onReady() {},
	// 	监听用户下拉动作
	onPullDownRefresh() {},
	// 	页面上拉触底事件的处理函数
	onReachBottom() {},
	// 	监听页面滚动，参数为Object
	onPageScroll() {}
};
</script>

<style lang="scss">
@import '../../common/scss/resume.scss';
</style>
