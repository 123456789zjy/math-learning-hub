const CURRICULUM = {
  s1: {
    label: "S1", name: "中一數學", accent: "#ff6b4a", intro: "建立數與代數、基礎幾何、量度及統計的共同語言。",
    chapters: [
      ["Basic Computation", "基礎計算", ["整除性與倍數", "質數與質因數分解", "HCF 與 LCM", "混合運算"]],
      ["Directed Numbers", "有向數", ["數線與大小比較", "有向數四則運算", "混合運算"]],
      ["Algebraic Expressions", "代數式", ["代數符號與項", "同類項", "代入法與化簡"]],
      ["Linear Equations in One Unknown (I)", "一元一次方程（一）", ["等式性質", "建立及解簡單方程", "答案驗算"]],
      ["Areas and Volumes (I)", "面積和體積（一）", ["多邊形及面積", "稜柱", "稜柱體積", "直稜柱總表面面積"], "https://123456789zjy.github.io/s1-ch05-area-lab/"],
      ["Manipulations of Polynomials", "多項式的運算", ["多項式加減", "單項式乘法", "展開簡單代數式"]],
      ["Linear Equations in One Unknown (II)", "一元一次方程（二）", ["含括號及分數的方程", "應用題建模"]],
      ["Statistics (I)", "統計（一）", ["數據搜集與分類", "頻數表", "統計圖表"]],
      ["Percentages (I)", "百分法（一）", ["百分數互換", "百分改變", "生活應用"]],
      ["Introduction to Coordinates", "坐標簡介", ["直角坐標系", "點的坐標", "簡單圖形與距離"]],
      ["Angles Related to Straight Lines and Triangles", "與直線和三角形相關的角", ["相交線與平行線", "三角形內角和", "外角關係"]],
      ["Congruent Triangles", "全等三角形", ["全等概念", "全等條件", "簡單幾何應用"]],
      ["Numerical Estimation", "數值估算", ["有效數字", "小數位取近似值", "估算與合理性"]],
      ["Rate, Ratio and Proportion", "率、比和比例", ["率與比", "比例式", "正比例應用"]]
    ]
  },
  s2: {
    label: "S2", name: "中二數學", accent: "#3a86ff", intro: "深化代數運算與演繹幾何，並連接量度、統計及三角學。",
    chapters: [
      ["Similar Triangles", "相似三角形", ["相似條件", "對應邊與比例", "面積比"]],
      ["Angles Related to Triangles and Polygons", "與三角形及多邊形相關的角", ["多邊形內角和", "正多邊形", "外角和"]],
      ["Identities", "恆等式", ["恆等式概念", "公式展開", "代數驗證"]],
      ["Factorization of Polynomials", "多項式的因式分解", ["提取公因式", "平方差", "簡單二次三項式"]],
      ["Algebraic Fractions and Formulas", "代數分式與公式", ["代數分式運算", "公式主項變換", "代入應用"]],
      ["Errors in Measurement", "量度的誤差", ["上限與下限", "絕對誤差", "百分誤差"]],
      ["Statistics (II)", "統計（二）", ["組織數據", "統計圖比較", "誤導性圖表"]],
      ["Linear Inequalities in One Unknown", "一元一次不等式", ["不等式性質", "解不等式", "數線表示"]],
      ["Linear Equations in Two Unknowns", "二元一次方程", ["聯立方程", "代入法", "消元法與應用"]],
      ["Pythagoras’ Theorem and Irrational Numbers", "畢氏定理與無理數", ["畢氏定理", "逆定理", "無理數與根式"]],
      ["Geometric Proofs", "幾何證明", ["已知與求證", "演繹步驟", "理由書寫"]],
      ["Introduction to Trigonometry", "三角學簡介", ["正弦、餘弦、正切", "求邊與角", "仰角及俯角入門"]],
      ["Areas and Volumes (II)", "面積和體積（二）", ["圓與扇形", "弧長及面積", "圓柱體積與表面面積"]]
    ]
  },
  s3: {
    label: "S3", name: "中三數學", accent: "#8b5cf6", intro: "整合因式分解、三角學、坐標幾何及概率，銜接高中課程。",
    chapters: [
      ["More about Factorization of Polynomials", "續多項式的因式分解", ["十字相乘法", "分組分解", "多步因式分解"]],
      ["Laws of Integral Indices", "整數指數定律", ["正整數指數", "零指數", "負整數指數"]],
      ["Percentages (II)", "百分法（二）", ["增長與折舊", "利息", "連續百分改變"]],
      ["Areas and Volumes (III)", "面積和體積（三）", ["棱錐與圓錐", "球體", "複合立體"]],
      ["Quadrilaterals", "四邊形", ["平行四邊形性質", "特殊四邊形", "判定與證明"]],
      ["Centres of Triangles", "三角形的心", ["垂心", "內心與外心", "重心"]],
      ["Trigonometric Relations", "三角比的關係", ["特殊角三角比", "互餘角關係", "基本關係"]],
      ["Applications of Trigonometry", "三角學的應用", ["仰角與俯角", "方位角", "二維及三維問題"]],
      ["Coordinate Geometry of Straight Lines", "直線的坐標幾何", ["距離與中點", "斜率", "直線方程入門"]],
      ["Measures of Central Tendency", "集中趨勢的量度", ["平均數", "中位數與眾數", "組合平均數"]],
      ["Introduction to Probability", "概率簡介", ["樣本空間", "簡單事件概率", "互補事件"]]
    ]
  },
  s4: {
    label: "S4", name: "中四數學", accent: "#12a594", intro: "高中核心課程起點：二次方程、函數、對數、變分與三角學。",
    chapters: [
      ["Quadratic Equations in One Unknown (I)", "一元二次方程（一）", ["因式分解法", "平方根法", "應用題"]],
      ["Quadratic Equations in One Unknown (II)", "一元二次方程（二）", ["公式法", "判別式", "根的性質"]],
      ["Equation of Straight Lines", "直線的方程", ["斜率與截距", "直線方程", "平行與垂直"]],
      ["Functions and Graphs", "函數及其圖像", ["函數記號", "定義域與值域", "圖像及變換入門"]],
      ["More about Polynomials", "續多項式", ["餘式定理", "因式定理", "多項式方程"]],
      ["Exponential and Logarithmic Functions", "指數及對數函數", ["指數定律", "對數定律", "函數圖像與方程"]],
      ["Variations", "變分", ["正變與反變", "聯變", "建立變分公式"]],
      ["Trigonometry (I)", "三角學（一）", ["任意角三角比", "三角函數圖像", "基本關係"]],
      ["More about Equations", "續方程", ["分式方程", "根式方程", "聯立方程"]]
    ]
  },
  s5: {
    label: "S5", name: "中五數學", accent: "#e59b18", intro: "把函數、概率、圓、軌跡、三角學及離差整合到應用情境。",
    chapters: [
      ["More about Equations", "續方程", ["較高次方程", "圖解解方程", "建模應用"]],
      ["Inequalities in One Unknown", "一元不等式", ["二次不等式", "分式不等式", "圖像解法"]],
      ["More about Graphs of Functions", "續函數圖像", ["圖像變換", "複合圖像", "解方程及不等式"]],
      ["Permutation and Combination", "排列與組合", ["計數原理", "排列", "組合"]],
      ["More about Probability", "續概率", ["加法定律", "乘法定律", "條件概率入門"]],
      ["Variations", "變分", ["多變量關係", "部分變分", "實際應用"]],
      ["Equations of Circles", "圓的方程", ["圓的一般式", "圓心與半徑", "直線與圓"]],
      ["Locus", "軌跡", ["基本軌跡", "坐標軌跡", "方程建立"]],
      ["Solving Triangles", "解三角形", ["正弦公式", "餘弦公式", "三角形面積"]],
      ["Applications in Trigonometry", "三角學的應用", ["二維問題", "三維問題", "方位與角度"]],
      ["Measure of Dispersion", "離差的量度", ["極差與四分位距", "方差", "標準差"]],
      ["More about Dispersion", "續離差", ["組合數據", "標準分", "數據比較"]]
    ]
  },
  s6: {
    label: "S6", name: "中六數學", accent: "#e94f79", intro: "完成核心課程：數列、線性規劃與統計判讀，集中整合及公開試應用。",
    chapters: [
      ["Arithmetic Sequences", "等差數列", ["通項", "等差中項", "求和公式"]],
      ["Geometric Sequences", "等比數列", ["通項", "等比中項", "有限及無限數列"]],
      ["Linear Inequalities in Two Unknowns and Linear Programming", "二元一次不等式及線性規劃", ["可行域", "目標函數", "最優解"]],
      ["Uses and Abuses of Statistics", "統計的應用及誤用", ["抽樣方法", "數據演繹", "圖表及統計誤用"]]
    ]
  }
};
