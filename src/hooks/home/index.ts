let useHomeContent: any = [
	{
		value: 'dc-data-reporter-cw',	// 产值
		unit: '万元',
		dataReview: ['当月总产值', '当年累计总产值'],
	},
	{
		value: 'dc-data-reporter-rz', // 人数
		unit: '人',
		dataReview: ['当月人员数量', '当年人数均值'],
	},
	{
		value: 'dc-data-reporter-xs',	// 线损
		unit: 'MWh',
		dataReview: ['当月线损值', '当年累计线损值'],
		rateContent: ["线损率", "平均线损率"]
	},
	{
		value: 'dc-data-reporter-dl', // 电力
		unit: 'KWh',
		dataReview: ['当月用电量', '当年累计用电量'],
	},
	{
		value: 'dc-data-reporter-trq',	// 天然气
		unit: 'm3',
		dataReview: ['当月用气量', '当年累计用气量'],
	},
	{
		value: 'dc-data-reporter-zq',	// 蒸汽
		unit: 't',
		dataReview: ['当月用气量', '当年累计用气量'],
	},
	{
		value: 'dc-data-reporter-yhsyq',	// 液化石油气
		unit: 'kg',
		dataReview: ['当月用量', '当年累计用量'],
	},
	{
		value: 'dc-data-reporter-yc',	// 用车能耗
		unit: 'L',
		dataReview: ['当月汽油用量', '当月柴油用量', '当年累计用油量'],
	},
	{
		value: 'dc-data-reporter-lfhl',	// SF6
		unit: 'kg',
		dataReview: ['当月SF6用量', '当年累计SF6用量'],
	},
	{
		value: 'dc-data-reporter-fdss',	// 发电设施
		unit: 'L',
		dataReview: ['当月用量', '当年累计用量'],
	},
];

export { useHomeContent };
