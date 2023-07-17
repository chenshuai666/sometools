<template>
    <div class="timeline-container">
        <div class="timeline">
            <div class="timeline-item" v-for="(item,index) in timelineList">
                <div class="timeline-time">
                    {{ item.year }}
                </div>
                <div class="timeline-card">
                    <div class="timeline-card-row" v-for="(it,idx) in item.content">
                        <div v-if="it.hasOwnProperty('month')" class="month">{{ it.month }}<span> 月</span></div>
                        <div v-else class="history_img"><img :src="it.imgPath" alt=""></div>
                        <div>{{ it.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import fazhan from '@/assets/interest.png'
import jiangbei from '@/assets/trophy.png'
import shougou from '@/assets/purchase.png'

const timelineList = reactive([
    {
        year: '2022',
        content: [
            { imgPath: fazhan, text: '第二次股权激励成功授予' },
            { month: '12', text: '完成收购克来盛罗49%少数股权，实现100%控股' }
        ],
    },
    {
        year: '2021',
        content: [
            { month: '12', text: '完成收购湖南睿图智能科技有限公司12.50%股权，交易作价1250万元' },
            { month: '12', text: '自建的三期厂房竣工，建筑面积共计23877.78平方米（产权所属克来）' },
            { imgPath: jiangbei, text: '获评上海市党支部建设示范点' }
        ],
    },
    {
        year: '2020',
        content: [
            { imgPath: jiangbei, text: '2018&2019年度博世亚太区优秀供应商' }
        ]
    },
    {
        year: '2019',
        content: [
            { month: '12', text: '成功发行总额180000.00万元可转换公司债券，同时克来厂房开工' },
            { imgPath: jiangbei, text: '上海市和谐劳动关系达标企业' },
            { imgPath: jiangbei, text: '上海市平安示范单位' },
            { imgPath: jiangbei, text: '上海市非公企业工会改革民营企业工会示范点' },
            { imgPath: jiangbei, text: '上海市五四青年奖章（集体）' }
        ]
    },
    {
        year: '2018',
        content: [
            { imgPath: jiangbei, text: '收购上海众源燃油分配器制造有限公司' },
            { imgPath: jiangbei, text: '获评联合汽车电子有限公司最佳合作奖' }
        ]
    },
    {
        year: '2017',
        content: [
            { month: '03', text: '2017年3月14日在上海证券交易所主板上市' },
            { month: '07', text: '奥可威厂房及办公楼竣工，建筑面积共计22080.48平方米' },
            { imgPath: jiangbei, text: '2016、2017博世亚太区优秀供应商' },
            { imgPath: jiangbei, text: '成为上海市智能制造产业协会会员单位' },
        ]
    },
    {
        year: '2014',
        content: [
            { month: '01', text: '成立全资子公司上海奥可威智能设备有限公司，受让宝山区罗泾镇2街坊27/16丘地块，宗地面积20100平方米' },
            { imgPath: jiangbei, text: '上海市机器人行业协会会员单位' },
            { imgPath: jiangbei, text: '取得上海市小巨人验收证书' },
        ]
    },
    {
        year: '2012',
        content: [
            { imgPath: shougou, text: '收购上海克来三罗机电自动化工程有限公司100%股权，同时获取土地面积19256平方米，房屋建筑面积14755.05平方米' },
            { imgPath: jiangbei, text: '成为上海市高新技术企业' },
        ]
    },
    {
        year: '2003',
        content: [
            {month:'05',text:'2003年5月成立上海克来机电自动化工程有限公司，注册资本105万元'}
        ]
    }
])
</script>

<style lang="scss" scoped>
.timeline-container{
    padding: 70px 0 70px 30px;
    .timeline{
        position: relative;
        .timeline-item{
            position: relative;
            padding-left: 60px;
            padding-bottom: 40px;
            .timeline-time{
                position: absolute;
                background-color: #ffffff;
                font-size: 24px;
                color: #217fc4;
                font-weight: bold;
                text-align: center;
                left: -33px;
                top: 35px;
                width: 64px;
                height: 24px;
                line-height: 24px;
                border: 1px solid #388cca;
            }
            .timeline-card{
                border: 1px solid #388cca;
                padding: 0;
                .timeline-card-row{
                    border-bottom: 1px dotted #eef8ff;
                    padding-right: 40px;
                    min-height: 90px;
                    position: relative;
                    font-size: 24px;
                    color: #333333;
                    display: flex;
                    align-items: center;
                    div:last-child{flex: 1;text-align: justify;}
                    div:first-child{width: 100px;}
                    .month{
                        box-sizing: border-box;
                        padding-left: 30px;
                        color: #217fc4;
                        font-size: 32px;
                        span{
                            color: #7c7c7c;
                            font-size: 16px;
                            font-weight: normal;
                        }
                    }
                    img{position: absolute;width: 30px;left: 45px;top: 32px;}
                }
                .timeline-card-row:last-child{
                    border-bottom: 0;
                }
            }
        }
        .timeline-item::before{
            content: '';
            position: absolute;
            left: 33px;
            top: 48px;
            width: 28px;
            height: 1px;
            background-color: #388cca;
        }
    }
    .timeline::before{
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #388cca;
    }
}
</style>