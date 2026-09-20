const DAY_ROUTES = [
  {
    "area": "international",
    "label": "国际出发 · 航段示意",
    "stops": [
      "出发机场（待确认）",
      "亚的斯亚贝巴"
    ],
    "modes": [
      "国际航班"
    ],
    "note": "出发城市与航班号尚未提供；国际航段不在这张岛内行程图中。",
    "links": [
      [
        "查看中转机场",
        "Addis Ababa Bole International Airport Ethiopia"
      ]
    ]
  },
  {
    "area": "tana",
    "label": "抵达首都 · 接机",
    "stops": [
      "亚的斯亚贝巴",
      "伊瓦图国际机场",
      "集合酒店（待确认）"
    ],
    "modes": [
      "国际航班",
      "接机"
    ],
    "note": "地图高亮首都区域；酒店最终确认后可补齐机场到酒店的精确路线。",
    "links": [
      [
        "查看抵达机场",
        "Ivato International Airport Madagascar"
      ]
    ]
  },
  {
    "area": "east",
    "label": "由高地进入东部雨林",
    "stops": [
      "塔那那利佛",
      "安达西贝",
      "狐猴岛 / 鳄鱼谷（待确认）",
      "酒店 / 夜游林区（待确认）"
    ],
    "modes": [
      "乘车",
      "当地接驳",
      "当地接驳"
    ],
    "note": "Google Maps 提供城市间参考路线。Vakôna 只是园区候选名称，暂不作为确定导航点。",
    "drive": [
      "Antananarivo Madagascar",
      "Andasibe Madagascar"
    ]
  },
  {
    "area": "east",
    "label": "雨林晨行 · 返回首都",
    "stops": [
      "安达西贝晨行林区（待确认）",
      "酒店",
      "蝴蝶谷（待确认）",
      "塔那那利佛"
    ],
    "modes": [
      "当地接驳",
      "乘车",
      "乘车"
    ],
    "note": "蝴蝶谷可能为 Peyrieras，待确认前不加入 Google 路线途经点。",
    "drive": [
      "Andasibe Madagascar",
      "Antananarivo Madagascar"
    ]
  },
  {
    "area": "cross",
    "label": "飞往西部 · 前往奇灵地",
    "stops": [
      "塔那那利佛机场",
      "穆隆达瓦机场",
      "奇灵地 / Relais du Kirindy",
      "夜游林区"
    ],
    "modes": [
      "国内航班",
      "乘车",
      "导游带领"
    ],
    "note": "航班不作为驾车段。Google 链接仅查询穆隆达瓦机场至拟入住酒店的地面段；林区入口以导游为准。",
    "drive": [
      "Morondava Airport Madagascar",
      "Relais du Kirindy Madagascar"
    ]
  },
  {
    "area": "west",
    "label": "干旱林 · 巨树日落 · 星空",
    "stops": [
      "奇灵地",
      "猴面包树大道",
      "穆隆达瓦晚餐",
      "猴面包树大道",
      "穆隆达瓦酒店"
    ],
    "modes": [
      "乘车",
      "乘车",
      "乘车",
      "乘车"
    ],
    "note": "晚餐后返回大道是原行程的星空安排。分段链接避免重复途经点在手机端丢失；酒店用城市位置代替。",
    "drive": [
      "Relais du Kirindy Madagascar",
      "Morondava Madagascar",
      "Avenue of the Baobabs Madagascar"
    ],
    "extraDrive": [
      "Morondava Madagascar",
      "Avenue of the Baobabs Madagascar"
    ]
  },
  {
    "area": "coast",
    "label": "Kimony · 海滩 · 渔村",
    "stops": [
      "穆隆达瓦酒店",
      "Kimony 保护区（待确认）",
      "Kimony 海滩",
      "酒店午休",
      "Vezo 渔村（待确认）",
      "穆隆达瓦"
    ],
    "modes": [
      "乘车",
      "当地接驳",
      "乘车",
      "乘车",
      "乘车"
    ],
    "note": "Vezo 为图上的渔村标注，不是唯一地址。仅提供 Kimony 海滩搜索，园区与村庄确认后再连成精确路线。",
    "links": [
      [
        "在 Google Maps 查找 Kimony 海滩",
        "Kimony Beach Morondava Madagascar"
      ]
    ]
  },
  {
    "area": "tana",
    "label": "返回高地 · 王家山丘 · 城市",
    "stops": [
      "穆隆达瓦机场",
      "塔那那利佛机场",
      "蓝山行宫（待确认）",
      "午餐 / 下午茶",
      "城市行走",
      "酒店"
    ],
    "modes": [
      "国内航班",
      "乘车",
      "乘车",
      "步行 / 接驳",
      "接驳"
    ],
    "note": "蓝山行宫推定为 Ambohimanga，仅提供候选地点搜索；下午茶、城市行走与酒店待补充。",
    "links": [
      [
        "查看蓝山行宫候选地点 Ambohimanga",
        "Royal Hill of Ambohimanga Madagascar"
      ]
    ]
  },
  {
    "area": "tana",
    "label": "离境 · 国际中转",
    "stops": [
      "塔那那利佛酒店",
      "伊瓦图国际机场",
      "亚的斯亚贝巴"
    ],
    "modes": [
      "送机",
      "国际航班"
    ],
    "note": "若蓝山行宫因前一天航班变化顺延，需根据离境航班另行确认，不预先插入固定路线。",
    "links": [
      [
        "查看离境机场",
        "Ivato International Airport Madagascar"
      ]
    ]
  },
  {
    "area": "international",
    "label": "返程抵达",
    "stops": [
      "亚的斯亚贝巴",
      "抵达机场（待确认）"
    ],
    "modes": [
      "国际航班"
    ],
    "note": "返程城市未提供，暂不绘制具体国际航线。",
    "links": [
      [
        "查看中转机场",
        "Addis Ababa Bole International Airport Ethiopia"
      ]
    ]
  }
];

function mapsSearch(query){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query)}
function mapsDirections(points){const p=new URLSearchParams({api:'1',origin:points[0],destination:points[1],travelmode:'driving'});if(points[2])p.set('waypoints',points[2]);return 'https://www.google.com/maps/dir/?'+p.toString()}
function routeMarkup(index){const r=DAY_ROUTES[index];const h=escapeHtml;const links=(r.links||[]).map(x=>[x[0],mapsSearch(x[1])]);if(r.drive)links.unshift(['Google Maps · '+(index===5?'白天地面路线':'地面参考路线'),mapsDirections(r.drive)]);if(r.extraDrive)links.push(['Google Maps · 晚间返回大道',mapsDirections(r.extraDrive)]);return `<section class="day-map" aria-label="当天行程示意图"><div class="map-heading"><h3 class="section-title">当天怎么走</h3><span>${h(r.label)}</span></div>${r.area==='international'?'<div class="flight-note">国际航段 · 出发与抵达城市待补充</div>':`<div class="daily-geography area-${h(r.area)}"><img src="images/itinerary-overview.png" width="1226" height="683" alt="旅行社提供的马达加斯加行程示意图；高亮当天所在区域"><span class="region region-tana" aria-hidden="true"></span><span class="region region-east" aria-hidden="true"></span><span class="region region-west" aria-hidden="true"></span><span class="region region-coast" aria-hidden="true"></span></div><p class="map-caption">底图：你提供的行程图 · 高亮为当日活动区域，非 GPS 轨迹</p>`}<ol class="route-stops">${r.stops.map((s,i)=>`<li><span class="stop-number">${i+1}</span><div><strong>${h(s)}</strong>${r.modes[i]?`<small>↓ ${h(r.modes[i])}</small>`:''}</div></li>`).join('')}</ol><p class="map-note">${h(r.note)}</p><div class="map-links">${links.map(l=>`<a href="${h(l[1])}" target="_blank" rel="noopener noreferrer">${h(l[0])} ↗</a>`).join('')}</div><p class="map-caption">外部地图需联网。Google 实时规划仅供参考，园区入口、道路与用时以当地导游安排为准。</p></section>`}
