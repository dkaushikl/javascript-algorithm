const { fizzBuzzOne, fizzBuzzTwo, fizzBuzzThree } = require('./index.js');

test('fizz buzz using method 1', () => {
    expect(fizzBuzzOne(20)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz");
    expect(fizzBuzzOne(15)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz");
    expect(fizzBuzzOne(100)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz");
    expect(fizzBuzzOne(550)).toEqual(`1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz,101,fizz,103,104,fizzbuzz,106,107,fizz,109,buzz,fizz,112,113,fizz,buzz,116,fizz,118,119,fizzbuzz,121,122,fizz,124,buzz,fizz,127,128,fizz,buzz,131,fizz,133,134,fizzbuzz,136,137,fizz,139,buzz,fizz,142,143,fizz,buzz,146,fizz,148,149,fizzbuzz,151,152,fizz,154,buzz,fizz,157,158,fizz,buzz,161,fizz,163,164,fizzbuzz,166,167,fizz,169,buzz,fizz,172,173,fizz,buzz,176,fizz,178,179,fizzbuzz,181,182,fizz,184,buzz,fizz,187,188,fizz,buzz,191,fizz,193,194,fizzbuzz,196,197,fizz,199,buzz,fizz,202,203,fizz,buzz,206,fizz,208,209,fizzbuzz,211,212,fizz,214,buzz,fizz,217,218,fizz,buzz,221,fizz,223,224,fizzbuzz,226,227,fizz,229,buzz,fizz,232,233,fizz,buzz,236,fizz,238,239,fizzbuzz,241,242,fizz,244,buzz,fizz,247,248,fizz,buzz,251,fizz,253,254,fizzbuzz,256,257,fizz,259,buzz,fizz,262,263,fizz,buzz,266,fizz,268,269,fizzbuzz,271,272,fizz,274,buzz,fizz,277,278,fizz,buzz,281,fizz,283,284,fizzbuzz,286,287,fizz,289,buzz,fizz,292,293,fizz,buzz,296,fizz,298,299,fizzbuzz,301,302,fizz,304,buzz,fizz,307,308,fizz,buzz,311,fizz,313,314,fizzbuzz,316,317,fizz,319,buzz,fizz,322,323,fizz,buzz,326,fizz,328,329,fizzbuzz,331,332,fizz,334,buzz,fizz,337,338,fizz,buzz,341,fizz,343,344,fizzbuzz,346,347,fizz,349,buzz,fizz,352,353,fizz,buzz,356,fizz,358,359,fizzbuzz,361,362,fizz,364,buzz,fizz,367,368,fizz,buzz,371,fizz,373,374,fizzbuzz,376,377,fizz,379,buzz,fizz,382,383,fizz,buzz,386,fizz,388,389,fizzbuzz,391,392,fizz,394,buzz,fizz,397,398,fizz,buzz,401,fizz,403,404,fizzbuzz,406,407,fizz,409,buzz,fizz,412,413,fizz,buzz,416,fizz,418,419,fizzbuzz,421,422,fizz,424,buzz,fizz,427,428,fizz,buzz,431,fizz,433,434,fizzbuzz,436,437,fizz,439,buzz,fizz,442,443,fizz,buzz,446,fizz,448,449,fizzbuzz,451,452,fizz,454,buzz,fizz,457,458,fizz,buzz,461,fizz,463,464,fizzbuzz,466,467,fizz,469,buzz,fizz,472,473,fizz,buzz,476,fizz,478,479,fizzbuzz,481,482,fizz,484,buzz,fizz,487,488,fizz,buzz,491,fizz,493,494,fizzbuzz,496,497,fizz,499,buzz,fizz,502,503,fizz,buzz,506,fizz,508,509,fizzbuzz,511,512,fizz,514,buzz,fizz,517,518,fizz,buzz,521,fizz,523,524,fizzbuzz,526,527,fizz,529,buzz,fizz,532,533,fizz,buzz,536,fizz,538,539,fizzbuzz,541,542,fizz,544,buzz,fizz,547,548,fizz,buzz`);
    expect(fizzBuzzOne(1250)).toEqual(`1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz,101,fizz,103,104,fizzbuzz,106,107,fizz,109,buzz,fizz,112,113,fizz,buzz,116,fizz,118,119,fizzbuzz,121,122,fizz,124,buzz,fizz,127,128,fizz,buzz,131,fizz,133,134,fizzbuzz,136,137,fizz,139,buzz,fizz,142,143,fizz,buzz,146,fizz,148,149,fizzbuzz,151,152,fizz,154,buzz,fizz,157,158,fizz,buzz,161,fizz,163,164,fizzbuzz,166,167,fizz,169,buzz,fizz,172,173,fizz,buzz,176,fizz,178,179,fizzbuzz,181,182,fizz,184,buzz,fizz,187,188,fizz,buzz,191,fizz,193,194,fizzbuzz,196,197,fizz,199,buzz,fizz,202,203,fizz,buzz,206,fizz,208,209,fizzbuzz,211,212,fizz,214,buzz,fizz,217,218,fizz,buzz,221,fizz,223,224,fizzbuzz,226,227,fizz,229,buzz,fizz,232,233,fizz,buzz,236,fizz,238,239,fizzbuzz,241,242,fizz,244,buzz,fizz,247,248,fizz,buzz,251,fizz,253,254,fizzbuzz,256,257,fizz,259,buzz,fizz,262,263,fizz,buzz,266,fizz,268,269,fizzbuzz,271,272,fizz,274,buzz,fizz,277,278,fizz,buzz,281,fizz,283,284,fizzbuzz,286,287,fizz,289,buzz,fizz,292,293,fizz,buzz,296,fizz,298,299,fizzbuzz,301,302,fizz,304,buzz,fizz,307,308,fizz,buzz,311,fizz,313,314,fizzbuzz,316,317,fizz,319,buzz,fizz,322,323,fizz,buzz,326,fizz,328,329,fizzbuzz,331,332,fizz,334,buzz,fizz,337,338,fizz,buzz,341,fizz,343,344,fizzbuzz,346,347,fizz,349,buzz,fizz,352,353,fizz,buzz,356,fizz,358,359,fizzbuzz,361,362,fizz,364,buzz,fizz,367,368,fizz,buzz,371,fizz,373,374,fizzbuzz,376,377,fizz,379,buzz,fizz,382,383,fizz,buzz,386,fizz,388,389,fizzbuzz,391,392,fizz,394,buzz,fizz,397,398,fizz,buzz,401,fizz,403,404,fizzbuzz,406,407,fizz,409,buzz,fizz,412,413,fizz,buzz,416,fizz,418,419,fizzbuzz,421,422,fizz,424,buzz,fizz,427,428,fizz,buzz,431,fizz,433,434,fizzbuzz,436,437,fizz,439,buzz,fizz,442,443,fizz,buzz,446,fizz,448,449,fizzbuzz,451,452,fizz,454,buzz,fizz,457,458,fizz,buzz,461,fizz,463,464,fizzbuzz,466,467,fizz,469,buzz,fizz,472,473,fizz,buzz,476,fizz,478,479,fizzbuzz,481,482,fizz,484,buzz,fizz,487,488,fizz,buzz,491,fizz,493,494,fizzbuzz,496,497,fizz,499,buzz,fizz,502,503,fizz,buzz,506,fizz,508,509,fizzbuzz,511,512,fizz,514,buzz,fizz,517,518,fizz,buzz,521,fizz,523,524,fizzbuzz,526,527,fizz,529,buzz,fizz,532,533,fizz,buzz,536,fizz,538,539,fizzbuzz,541,542,fizz,544,buzz,fizz,547,548,fizz,buzz,551,fizz,553,554,fizzbuzz,556,557,fizz,559,buzz,fizz,562,563,fizz,buzz,566,fizz,568,569,fizzbuzz,571,572,fizz,574,buzz,fizz,577,578,fizz,buzz,581,fizz,583,584,fizzbuzz,586,587,fizz,589,buzz,fizz,592,593,fizz,buzz,596,fizz,598,599,fizzbuzz,601,602,fizz,604,buzz,fizz,607,608,fizz,buzz,611,fizz,613,614,fizzbuzz,616,617,fizz,619,buzz,fizz,622,623,fizz,buzz,626,fizz,628,629,fizzbuzz,631,632,fizz,634,buzz,fizz,637,638,fizz,buzz,641,fizz,643,644,fizzbuzz,646,647,fizz,649,buzz,fizz,652,653,fizz,buzz,656,fizz,658,659,fizzbuzz,661,662,fizz,664,buzz,fizz,667,668,fizz,buzz,671,fizz,673,674,fizzbuzz,676,677,fizz,679,buzz,fizz,682,683,fizz,buzz,686,fizz,688,689,fizzbuzz,691,692,fizz,694,buzz,fizz,697,698,fizz,buzz,701,fizz,703,704,fizzbuzz,706,707,fizz,709,buzz,fizz,712,713,fizz,buzz,716,fizz,718,719,fizzbuzz,721,722,fizz,724,buzz,fizz,727,728,fizz,buzz,731,fizz,733,734,fizzbuzz,736,737,fizz,739,buzz,fizz,742,743,fizz,buzz,746,fizz,748,749,fizzbuzz,751,752,fizz,754,buzz,fizz,757,758,fizz,buzz,761,fizz,763,764,fizzbuzz,766,767,fizz,769,buzz,fizz,772,773,fizz,buzz,776,fizz,778,779,fizzbuzz,781,782,fizz,784,buzz,fizz,787,788,fizz,buzz,791,fizz,793,794,fizzbuzz,796,797,fizz,799,buzz,fizz,802,803,fizz,buzz,806,fizz,808,809,fizzbuzz,811,812,fizz,814,buzz,fizz,817,818,fizz,buzz,821,fizz,823,824,fizzbuzz,826,827,fizz,829,buzz,fizz,832,833,fizz,buzz,836,fizz,838,839,fizzbuzz,841,842,fizz,844,buzz,fizz,847,848,fizz,buzz,851,fizz,853,854,fizzbuzz,856,857,fizz,859,buzz,fizz,862,863,fizz,buzz,866,fizz,868,869,fizzbuzz,871,872,fizz,874,buzz,fizz,877,878,fizz,buzz,881,fizz,883,884,fizzbuzz,886,887,fizz,889,buzz,fizz,892,893,fizz,buzz,896,fizz,898,899,fizzbuzz,901,902,fizz,904,buzz,fizz,907,908,fizz,buzz,911,fizz,913,914,fizzbuzz,916,917,fizz,919,buzz,fizz,922,923,fizz,buzz,926,fizz,928,929,fizzbuzz,931,932,fizz,934,buzz,fizz,937,938,fizz,buzz,941,fizz,943,944,fizzbuzz,946,947,fizz,949,buzz,fizz,952,953,fizz,buzz,956,fizz,958,959,fizzbuzz,961,962,fizz,964,buzz,fizz,967,968,fizz,buzz,971,fizz,973,974,fizzbuzz,976,977,fizz,979,buzz,fizz,982,983,fizz,buzz,986,fizz,988,989,fizzbuzz,991,992,fizz,994,buzz,fizz,997,998,fizz,buzz,1001,fizz,1003,1004,fizzbuzz,1006,1007,fizz,1009,buzz,fizz,1012,1013,fizz,buzz,1016,fizz,1018,1019,fizzbuzz,1021,1022,fizz,1024,buzz,fizz,1027,1028,fizz,buzz,1031,fizz,1033,1034,fizzbuzz,1036,1037,fizz,1039,buzz,fizz,1042,1043,fizz,buzz,1046,fizz,1048,1049,fizzbuzz,1051,1052,fizz,1054,buzz,fizz,1057,1058,fizz,buzz,1061,fizz,1063,1064,fizzbuzz,1066,1067,fizz,1069,buzz,fizz,1072,1073,fizz,buzz,1076,fizz,1078,1079,fizzbuzz,1081,1082,fizz,1084,buzz,fizz,1087,1088,fizz,buzz,1091,fizz,1093,1094,fizzbuzz,1096,1097,fizz,1099,buzz,fizz,1102,1103,fizz,buzz,1106,fizz,1108,1109,fizzbuzz,1111,1112,fizz,1114,buzz,fizz,1117,1118,fizz,buzz,1121,fizz,1123,1124,fizzbuzz,1126,1127,fizz,1129,buzz,fizz,1132,1133,fizz,buzz,1136,fizz,1138,1139,fizzbuzz,1141,1142,fizz,1144,buzz,fizz,1147,1148,fizz,buzz,1151,fizz,1153,1154,fizzbuzz,1156,1157,fizz,1159,buzz,fizz,1162,1163,fizz,buzz,1166,fizz,1168,1169,fizzbuzz,1171,1172,fizz,1174,buzz,fizz,1177,1178,fizz,buzz,1181,fizz,1183,1184,fizzbuzz,1186,1187,fizz,1189,buzz,fizz,1192,1193,fizz,buzz,1196,fizz,1198,1199,fizzbuzz,1201,1202,fizz,1204,buzz,fizz,1207,1208,fizz,buzz,1211,fizz,1213,1214,fizzbuzz,1216,1217,fizz,1219,buzz,fizz,1222,1223,fizz,buzz,1226,fizz,1228,1229,fizzbuzz,1231,1232,fizz,1234,buzz,fizz,1237,1238,fizz,buzz,1241,fizz,1243,1244,fizzbuzz,1246,1247,fizz,1249,buzz`);
    expect(fizzBuzzOne(1)).toEqual("1");
    expect(fizzBuzzOne(2)).toEqual("1,2");
    expect(fizzBuzzOne(3)).toEqual("1,2,fizz");
    expect(fizzBuzzOne(0)).toEqual("");
    expect(fizzBuzzOne(null)).toEqual("");
    expect(fizzBuzzOne(undefined)).toEqual("");
});

test('fizz buzz using method 2', () => {
    expect(fizzBuzzTwo(20)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz");
    expect(fizzBuzzTwo(15)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz");
    expect(fizzBuzzTwo(100)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz");
    expect(fizzBuzzTwo(550)).toEqual(`1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz,101,fizz,103,104,fizzbuzz,106,107,fizz,109,buzz,fizz,112,113,fizz,buzz,116,fizz,118,119,fizzbuzz,121,122,fizz,124,buzz,fizz,127,128,fizz,buzz,131,fizz,133,134,fizzbuzz,136,137,fizz,139,buzz,fizz,142,143,fizz,buzz,146,fizz,148,149,fizzbuzz,151,152,fizz,154,buzz,fizz,157,158,fizz,buzz,161,fizz,163,164,fizzbuzz,166,167,fizz,169,buzz,fizz,172,173,fizz,buzz,176,fizz,178,179,fizzbuzz,181,182,fizz,184,buzz,fizz,187,188,fizz,buzz,191,fizz,193,194,fizzbuzz,196,197,fizz,199,buzz,fizz,202,203,fizz,buzz,206,fizz,208,209,fizzbuzz,211,212,fizz,214,buzz,fizz,217,218,fizz,buzz,221,fizz,223,224,fizzbuzz,226,227,fizz,229,buzz,fizz,232,233,fizz,buzz,236,fizz,238,239,fizzbuzz,241,242,fizz,244,buzz,fizz,247,248,fizz,buzz,251,fizz,253,254,fizzbuzz,256,257,fizz,259,buzz,fizz,262,263,fizz,buzz,266,fizz,268,269,fizzbuzz,271,272,fizz,274,buzz,fizz,277,278,fizz,buzz,281,fizz,283,284,fizzbuzz,286,287,fizz,289,buzz,fizz,292,293,fizz,buzz,296,fizz,298,299,fizzbuzz,301,302,fizz,304,buzz,fizz,307,308,fizz,buzz,311,fizz,313,314,fizzbuzz,316,317,fizz,319,buzz,fizz,322,323,fizz,buzz,326,fizz,328,329,fizzbuzz,331,332,fizz,334,buzz,fizz,337,338,fizz,buzz,341,fizz,343,344,fizzbuzz,346,347,fizz,349,buzz,fizz,352,353,fizz,buzz,356,fizz,358,359,fizzbuzz,361,362,fizz,364,buzz,fizz,367,368,fizz,buzz,371,fizz,373,374,fizzbuzz,376,377,fizz,379,buzz,fizz,382,383,fizz,buzz,386,fizz,388,389,fizzbuzz,391,392,fizz,394,buzz,fizz,397,398,fizz,buzz,401,fizz,403,404,fizzbuzz,406,407,fizz,409,buzz,fizz,412,413,fizz,buzz,416,fizz,418,419,fizzbuzz,421,422,fizz,424,buzz,fizz,427,428,fizz,buzz,431,fizz,433,434,fizzbuzz,436,437,fizz,439,buzz,fizz,442,443,fizz,buzz,446,fizz,448,449,fizzbuzz,451,452,fizz,454,buzz,fizz,457,458,fizz,buzz,461,fizz,463,464,fizzbuzz,466,467,fizz,469,buzz,fizz,472,473,fizz,buzz,476,fizz,478,479,fizzbuzz,481,482,fizz,484,buzz,fizz,487,488,fizz,buzz,491,fizz,493,494,fizzbuzz,496,497,fizz,499,buzz,fizz,502,503,fizz,buzz,506,fizz,508,509,fizzbuzz,511,512,fizz,514,buzz,fizz,517,518,fizz,buzz,521,fizz,523,524,fizzbuzz,526,527,fizz,529,buzz,fizz,532,533,fizz,buzz,536,fizz,538,539,fizzbuzz,541,542,fizz,544,buzz,fizz,547,548,fizz,buzz`);
    expect(fizzBuzzTwo(1250)).toEqual(`1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz,101,fizz,103,104,fizzbuzz,106,107,fizz,109,buzz,fizz,112,113,fizz,buzz,116,fizz,118,119,fizzbuzz,121,122,fizz,124,buzz,fizz,127,128,fizz,buzz,131,fizz,133,134,fizzbuzz,136,137,fizz,139,buzz,fizz,142,143,fizz,buzz,146,fizz,148,149,fizzbuzz,151,152,fizz,154,buzz,fizz,157,158,fizz,buzz,161,fizz,163,164,fizzbuzz,166,167,fizz,169,buzz,fizz,172,173,fizz,buzz,176,fizz,178,179,fizzbuzz,181,182,fizz,184,buzz,fizz,187,188,fizz,buzz,191,fizz,193,194,fizzbuzz,196,197,fizz,199,buzz,fizz,202,203,fizz,buzz,206,fizz,208,209,fizzbuzz,211,212,fizz,214,buzz,fizz,217,218,fizz,buzz,221,fizz,223,224,fizzbuzz,226,227,fizz,229,buzz,fizz,232,233,fizz,buzz,236,fizz,238,239,fizzbuzz,241,242,fizz,244,buzz,fizz,247,248,fizz,buzz,251,fizz,253,254,fizzbuzz,256,257,fizz,259,buzz,fizz,262,263,fizz,buzz,266,fizz,268,269,fizzbuzz,271,272,fizz,274,buzz,fizz,277,278,fizz,buzz,281,fizz,283,284,fizzbuzz,286,287,fizz,289,buzz,fizz,292,293,fizz,buzz,296,fizz,298,299,fizzbuzz,301,302,fizz,304,buzz,fizz,307,308,fizz,buzz,311,fizz,313,314,fizzbuzz,316,317,fizz,319,buzz,fizz,322,323,fizz,buzz,326,fizz,328,329,fizzbuzz,331,332,fizz,334,buzz,fizz,337,338,fizz,buzz,341,fizz,343,344,fizzbuzz,346,347,fizz,349,buzz,fizz,352,353,fizz,buzz,356,fizz,358,359,fizzbuzz,361,362,fizz,364,buzz,fizz,367,368,fizz,buzz,371,fizz,373,374,fizzbuzz,376,377,fizz,379,buzz,fizz,382,383,fizz,buzz,386,fizz,388,389,fizzbuzz,391,392,fizz,394,buzz,fizz,397,398,fizz,buzz,401,fizz,403,404,fizzbuzz,406,407,fizz,409,buzz,fizz,412,413,fizz,buzz,416,fizz,418,419,fizzbuzz,421,422,fizz,424,buzz,fizz,427,428,fizz,buzz,431,fizz,433,434,fizzbuzz,436,437,fizz,439,buzz,fizz,442,443,fizz,buzz,446,fizz,448,449,fizzbuzz,451,452,fizz,454,buzz,fizz,457,458,fizz,buzz,461,fizz,463,464,fizzbuzz,466,467,fizz,469,buzz,fizz,472,473,fizz,buzz,476,fizz,478,479,fizzbuzz,481,482,fizz,484,buzz,fizz,487,488,fizz,buzz,491,fizz,493,494,fizzbuzz,496,497,fizz,499,buzz,fizz,502,503,fizz,buzz,506,fizz,508,509,fizzbuzz,511,512,fizz,514,buzz,fizz,517,518,fizz,buzz,521,fizz,523,524,fizzbuzz,526,527,fizz,529,buzz,fizz,532,533,fizz,buzz,536,fizz,538,539,fizzbuzz,541,542,fizz,544,buzz,fizz,547,548,fizz,buzz,551,fizz,553,554,fizzbuzz,556,557,fizz,559,buzz,fizz,562,563,fizz,buzz,566,fizz,568,569,fizzbuzz,571,572,fizz,574,buzz,fizz,577,578,fizz,buzz,581,fizz,583,584,fizzbuzz,586,587,fizz,589,buzz,fizz,592,593,fizz,buzz,596,fizz,598,599,fizzbuzz,601,602,fizz,604,buzz,fizz,607,608,fizz,buzz,611,fizz,613,614,fizzbuzz,616,617,fizz,619,buzz,fizz,622,623,fizz,buzz,626,fizz,628,629,fizzbuzz,631,632,fizz,634,buzz,fizz,637,638,fizz,buzz,641,fizz,643,644,fizzbuzz,646,647,fizz,649,buzz,fizz,652,653,fizz,buzz,656,fizz,658,659,fizzbuzz,661,662,fizz,664,buzz,fizz,667,668,fizz,buzz,671,fizz,673,674,fizzbuzz,676,677,fizz,679,buzz,fizz,682,683,fizz,buzz,686,fizz,688,689,fizzbuzz,691,692,fizz,694,buzz,fizz,697,698,fizz,buzz,701,fizz,703,704,fizzbuzz,706,707,fizz,709,buzz,fizz,712,713,fizz,buzz,716,fizz,718,719,fizzbuzz,721,722,fizz,724,buzz,fizz,727,728,fizz,buzz,731,fizz,733,734,fizzbuzz,736,737,fizz,739,buzz,fizz,742,743,fizz,buzz,746,fizz,748,749,fizzbuzz,751,752,fizz,754,buzz,fizz,757,758,fizz,buzz,761,fizz,763,764,fizzbuzz,766,767,fizz,769,buzz,fizz,772,773,fizz,buzz,776,fizz,778,779,fizzbuzz,781,782,fizz,784,buzz,fizz,787,788,fizz,buzz,791,fizz,793,794,fizzbuzz,796,797,fizz,799,buzz,fizz,802,803,fizz,buzz,806,fizz,808,809,fizzbuzz,811,812,fizz,814,buzz,fizz,817,818,fizz,buzz,821,fizz,823,824,fizzbuzz,826,827,fizz,829,buzz,fizz,832,833,fizz,buzz,836,fizz,838,839,fizzbuzz,841,842,fizz,844,buzz,fizz,847,848,fizz,buzz,851,fizz,853,854,fizzbuzz,856,857,fizz,859,buzz,fizz,862,863,fizz,buzz,866,fizz,868,869,fizzbuzz,871,872,fizz,874,buzz,fizz,877,878,fizz,buzz,881,fizz,883,884,fizzbuzz,886,887,fizz,889,buzz,fizz,892,893,fizz,buzz,896,fizz,898,899,fizzbuzz,901,902,fizz,904,buzz,fizz,907,908,fizz,buzz,911,fizz,913,914,fizzbuzz,916,917,fizz,919,buzz,fizz,922,923,fizz,buzz,926,fizz,928,929,fizzbuzz,931,932,fizz,934,buzz,fizz,937,938,fizz,buzz,941,fizz,943,944,fizzbuzz,946,947,fizz,949,buzz,fizz,952,953,fizz,buzz,956,fizz,958,959,fizzbuzz,961,962,fizz,964,buzz,fizz,967,968,fizz,buzz,971,fizz,973,974,fizzbuzz,976,977,fizz,979,buzz,fizz,982,983,fizz,buzz,986,fizz,988,989,fizzbuzz,991,992,fizz,994,buzz,fizz,997,998,fizz,buzz,1001,fizz,1003,1004,fizzbuzz,1006,1007,fizz,1009,buzz,fizz,1012,1013,fizz,buzz,1016,fizz,1018,1019,fizzbuzz,1021,1022,fizz,1024,buzz,fizz,1027,1028,fizz,buzz,1031,fizz,1033,1034,fizzbuzz,1036,1037,fizz,1039,buzz,fizz,1042,1043,fizz,buzz,1046,fizz,1048,1049,fizzbuzz,1051,1052,fizz,1054,buzz,fizz,1057,1058,fizz,buzz,1061,fizz,1063,1064,fizzbuzz,1066,1067,fizz,1069,buzz,fizz,1072,1073,fizz,buzz,1076,fizz,1078,1079,fizzbuzz,1081,1082,fizz,1084,buzz,fizz,1087,1088,fizz,buzz,1091,fizz,1093,1094,fizzbuzz,1096,1097,fizz,1099,buzz,fizz,1102,1103,fizz,buzz,1106,fizz,1108,1109,fizzbuzz,1111,1112,fizz,1114,buzz,fizz,1117,1118,fizz,buzz,1121,fizz,1123,1124,fizzbuzz,1126,1127,fizz,1129,buzz,fizz,1132,1133,fizz,buzz,1136,fizz,1138,1139,fizzbuzz,1141,1142,fizz,1144,buzz,fizz,1147,1148,fizz,buzz,1151,fizz,1153,1154,fizzbuzz,1156,1157,fizz,1159,buzz,fizz,1162,1163,fizz,buzz,1166,fizz,1168,1169,fizzbuzz,1171,1172,fizz,1174,buzz,fizz,1177,1178,fizz,buzz,1181,fizz,1183,1184,fizzbuzz,1186,1187,fizz,1189,buzz,fizz,1192,1193,fizz,buzz,1196,fizz,1198,1199,fizzbuzz,1201,1202,fizz,1204,buzz,fizz,1207,1208,fizz,buzz,1211,fizz,1213,1214,fizzbuzz,1216,1217,fizz,1219,buzz,fizz,1222,1223,fizz,buzz,1226,fizz,1228,1229,fizzbuzz,1231,1232,fizz,1234,buzz,fizz,1237,1238,fizz,buzz,1241,fizz,1243,1244,fizzbuzz,1246,1247,fizz,1249,buzz`);
    expect(fizzBuzzTwo(1)).toEqual("1");
    expect(fizzBuzzTwo(2)).toEqual("1,2");
    expect(fizzBuzzTwo(3)).toEqual("1,2,fizz");
    expect(fizzBuzzTwo(0)).toEqual("");
    expect(fizzBuzzTwo(null)).toEqual("");
    expect(fizzBuzzTwo(undefined)).toEqual("");
});

test('fizz buzz using method 3', () => {
    expect(fizzBuzzThree(20)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz");
    expect(fizzBuzzThree(15)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz");
    expect(fizzBuzzThree(100)).toEqual("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz");
    expect(fizzBuzzThree(550)).toEqual(`1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz,101,fizz,103,104,fizzbuzz,106,107,fizz,109,buzz,fizz,112,113,fizz,buzz,116,fizz,118,119,fizzbuzz,121,122,fizz,124,buzz,fizz,127,128,fizz,buzz,131,fizz,133,134,fizzbuzz,136,137,fizz,139,buzz,fizz,142,143,fizz,buzz,146,fizz,148,149,fizzbuzz,151,152,fizz,154,buzz,fizz,157,158,fizz,buzz,161,fizz,163,164,fizzbuzz,166,167,fizz,169,buzz,fizz,172,173,fizz,buzz,176,fizz,178,179,fizzbuzz,181,182,fizz,184,buzz,fizz,187,188,fizz,buzz,191,fizz,193,194,fizzbuzz,196,197,fizz,199,buzz,fizz,202,203,fizz,buzz,206,fizz,208,209,fizzbuzz,211,212,fizz,214,buzz,fizz,217,218,fizz,buzz,221,fizz,223,224,fizzbuzz,226,227,fizz,229,buzz,fizz,232,233,fizz,buzz,236,fizz,238,239,fizzbuzz,241,242,fizz,244,buzz,fizz,247,248,fizz,buzz,251,fizz,253,254,fizzbuzz,256,257,fizz,259,buzz,fizz,262,263,fizz,buzz,266,fizz,268,269,fizzbuzz,271,272,fizz,274,buzz,fizz,277,278,fizz,buzz,281,fizz,283,284,fizzbuzz,286,287,fizz,289,buzz,fizz,292,293,fizz,buzz,296,fizz,298,299,fizzbuzz,301,302,fizz,304,buzz,fizz,307,308,fizz,buzz,311,fizz,313,314,fizzbuzz,316,317,fizz,319,buzz,fizz,322,323,fizz,buzz,326,fizz,328,329,fizzbuzz,331,332,fizz,334,buzz,fizz,337,338,fizz,buzz,341,fizz,343,344,fizzbuzz,346,347,fizz,349,buzz,fizz,352,353,fizz,buzz,356,fizz,358,359,fizzbuzz,361,362,fizz,364,buzz,fizz,367,368,fizz,buzz,371,fizz,373,374,fizzbuzz,376,377,fizz,379,buzz,fizz,382,383,fizz,buzz,386,fizz,388,389,fizzbuzz,391,392,fizz,394,buzz,fizz,397,398,fizz,buzz,401,fizz,403,404,fizzbuzz,406,407,fizz,409,buzz,fizz,412,413,fizz,buzz,416,fizz,418,419,fizzbuzz,421,422,fizz,424,buzz,fizz,427,428,fizz,buzz,431,fizz,433,434,fizzbuzz,436,437,fizz,439,buzz,fizz,442,443,fizz,buzz,446,fizz,448,449,fizzbuzz,451,452,fizz,454,buzz,fizz,457,458,fizz,buzz,461,fizz,463,464,fizzbuzz,466,467,fizz,469,buzz,fizz,472,473,fizz,buzz,476,fizz,478,479,fizzbuzz,481,482,fizz,484,buzz,fizz,487,488,fizz,buzz,491,fizz,493,494,fizzbuzz,496,497,fizz,499,buzz,fizz,502,503,fizz,buzz,506,fizz,508,509,fizzbuzz,511,512,fizz,514,buzz,fizz,517,518,fizz,buzz,521,fizz,523,524,fizzbuzz,526,527,fizz,529,buzz,fizz,532,533,fizz,buzz,536,fizz,538,539,fizzbuzz,541,542,fizz,544,buzz,fizz,547,548,fizz,buzz`);
    expect(fizzBuzzThree(1250)).toEqual(`1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz,31,32,fizz,34,buzz,fizz,37,38,fizz,buzz,41,fizz,43,44,fizzbuzz,46,47,fizz,49,buzz,fizz,52,53,fizz,buzz,56,fizz,58,59,fizzbuzz,61,62,fizz,64,buzz,fizz,67,68,fizz,buzz,71,fizz,73,74,fizzbuzz,76,77,fizz,79,buzz,fizz,82,83,fizz,buzz,86,fizz,88,89,fizzbuzz,91,92,fizz,94,buzz,fizz,97,98,fizz,buzz,101,fizz,103,104,fizzbuzz,106,107,fizz,109,buzz,fizz,112,113,fizz,buzz,116,fizz,118,119,fizzbuzz,121,122,fizz,124,buzz,fizz,127,128,fizz,buzz,131,fizz,133,134,fizzbuzz,136,137,fizz,139,buzz,fizz,142,143,fizz,buzz,146,fizz,148,149,fizzbuzz,151,152,fizz,154,buzz,fizz,157,158,fizz,buzz,161,fizz,163,164,fizzbuzz,166,167,fizz,169,buzz,fizz,172,173,fizz,buzz,176,fizz,178,179,fizzbuzz,181,182,fizz,184,buzz,fizz,187,188,fizz,buzz,191,fizz,193,194,fizzbuzz,196,197,fizz,199,buzz,fizz,202,203,fizz,buzz,206,fizz,208,209,fizzbuzz,211,212,fizz,214,buzz,fizz,217,218,fizz,buzz,221,fizz,223,224,fizzbuzz,226,227,fizz,229,buzz,fizz,232,233,fizz,buzz,236,fizz,238,239,fizzbuzz,241,242,fizz,244,buzz,fizz,247,248,fizz,buzz,251,fizz,253,254,fizzbuzz,256,257,fizz,259,buzz,fizz,262,263,fizz,buzz,266,fizz,268,269,fizzbuzz,271,272,fizz,274,buzz,fizz,277,278,fizz,buzz,281,fizz,283,284,fizzbuzz,286,287,fizz,289,buzz,fizz,292,293,fizz,buzz,296,fizz,298,299,fizzbuzz,301,302,fizz,304,buzz,fizz,307,308,fizz,buzz,311,fizz,313,314,fizzbuzz,316,317,fizz,319,buzz,fizz,322,323,fizz,buzz,326,fizz,328,329,fizzbuzz,331,332,fizz,334,buzz,fizz,337,338,fizz,buzz,341,fizz,343,344,fizzbuzz,346,347,fizz,349,buzz,fizz,352,353,fizz,buzz,356,fizz,358,359,fizzbuzz,361,362,fizz,364,buzz,fizz,367,368,fizz,buzz,371,fizz,373,374,fizzbuzz,376,377,fizz,379,buzz,fizz,382,383,fizz,buzz,386,fizz,388,389,fizzbuzz,391,392,fizz,394,buzz,fizz,397,398,fizz,buzz,401,fizz,403,404,fizzbuzz,406,407,fizz,409,buzz,fizz,412,413,fizz,buzz,416,fizz,418,419,fizzbuzz,421,422,fizz,424,buzz,fizz,427,428,fizz,buzz,431,fizz,433,434,fizzbuzz,436,437,fizz,439,buzz,fizz,442,443,fizz,buzz,446,fizz,448,449,fizzbuzz,451,452,fizz,454,buzz,fizz,457,458,fizz,buzz,461,fizz,463,464,fizzbuzz,466,467,fizz,469,buzz,fizz,472,473,fizz,buzz,476,fizz,478,479,fizzbuzz,481,482,fizz,484,buzz,fizz,487,488,fizz,buzz,491,fizz,493,494,fizzbuzz,496,497,fizz,499,buzz,fizz,502,503,fizz,buzz,506,fizz,508,509,fizzbuzz,511,512,fizz,514,buzz,fizz,517,518,fizz,buzz,521,fizz,523,524,fizzbuzz,526,527,fizz,529,buzz,fizz,532,533,fizz,buzz,536,fizz,538,539,fizzbuzz,541,542,fizz,544,buzz,fizz,547,548,fizz,buzz,551,fizz,553,554,fizzbuzz,556,557,fizz,559,buzz,fizz,562,563,fizz,buzz,566,fizz,568,569,fizzbuzz,571,572,fizz,574,buzz,fizz,577,578,fizz,buzz,581,fizz,583,584,fizzbuzz,586,587,fizz,589,buzz,fizz,592,593,fizz,buzz,596,fizz,598,599,fizzbuzz,601,602,fizz,604,buzz,fizz,607,608,fizz,buzz,611,fizz,613,614,fizzbuzz,616,617,fizz,619,buzz,fizz,622,623,fizz,buzz,626,fizz,628,629,fizzbuzz,631,632,fizz,634,buzz,fizz,637,638,fizz,buzz,641,fizz,643,644,fizzbuzz,646,647,fizz,649,buzz,fizz,652,653,fizz,buzz,656,fizz,658,659,fizzbuzz,661,662,fizz,664,buzz,fizz,667,668,fizz,buzz,671,fizz,673,674,fizzbuzz,676,677,fizz,679,buzz,fizz,682,683,fizz,buzz,686,fizz,688,689,fizzbuzz,691,692,fizz,694,buzz,fizz,697,698,fizz,buzz,701,fizz,703,704,fizzbuzz,706,707,fizz,709,buzz,fizz,712,713,fizz,buzz,716,fizz,718,719,fizzbuzz,721,722,fizz,724,buzz,fizz,727,728,fizz,buzz,731,fizz,733,734,fizzbuzz,736,737,fizz,739,buzz,fizz,742,743,fizz,buzz,746,fizz,748,749,fizzbuzz,751,752,fizz,754,buzz,fizz,757,758,fizz,buzz,761,fizz,763,764,fizzbuzz,766,767,fizz,769,buzz,fizz,772,773,fizz,buzz,776,fizz,778,779,fizzbuzz,781,782,fizz,784,buzz,fizz,787,788,fizz,buzz,791,fizz,793,794,fizzbuzz,796,797,fizz,799,buzz,fizz,802,803,fizz,buzz,806,fizz,808,809,fizzbuzz,811,812,fizz,814,buzz,fizz,817,818,fizz,buzz,821,fizz,823,824,fizzbuzz,826,827,fizz,829,buzz,fizz,832,833,fizz,buzz,836,fizz,838,839,fizzbuzz,841,842,fizz,844,buzz,fizz,847,848,fizz,buzz,851,fizz,853,854,fizzbuzz,856,857,fizz,859,buzz,fizz,862,863,fizz,buzz,866,fizz,868,869,fizzbuzz,871,872,fizz,874,buzz,fizz,877,878,fizz,buzz,881,fizz,883,884,fizzbuzz,886,887,fizz,889,buzz,fizz,892,893,fizz,buzz,896,fizz,898,899,fizzbuzz,901,902,fizz,904,buzz,fizz,907,908,fizz,buzz,911,fizz,913,914,fizzbuzz,916,917,fizz,919,buzz,fizz,922,923,fizz,buzz,926,fizz,928,929,fizzbuzz,931,932,fizz,934,buzz,fizz,937,938,fizz,buzz,941,fizz,943,944,fizzbuzz,946,947,fizz,949,buzz,fizz,952,953,fizz,buzz,956,fizz,958,959,fizzbuzz,961,962,fizz,964,buzz,fizz,967,968,fizz,buzz,971,fizz,973,974,fizzbuzz,976,977,fizz,979,buzz,fizz,982,983,fizz,buzz,986,fizz,988,989,fizzbuzz,991,992,fizz,994,buzz,fizz,997,998,fizz,buzz,1001,fizz,1003,1004,fizzbuzz,1006,1007,fizz,1009,buzz,fizz,1012,1013,fizz,buzz,1016,fizz,1018,1019,fizzbuzz,1021,1022,fizz,1024,buzz,fizz,1027,1028,fizz,buzz,1031,fizz,1033,1034,fizzbuzz,1036,1037,fizz,1039,buzz,fizz,1042,1043,fizz,buzz,1046,fizz,1048,1049,fizzbuzz,1051,1052,fizz,1054,buzz,fizz,1057,1058,fizz,buzz,1061,fizz,1063,1064,fizzbuzz,1066,1067,fizz,1069,buzz,fizz,1072,1073,fizz,buzz,1076,fizz,1078,1079,fizzbuzz,1081,1082,fizz,1084,buzz,fizz,1087,1088,fizz,buzz,1091,fizz,1093,1094,fizzbuzz,1096,1097,fizz,1099,buzz,fizz,1102,1103,fizz,buzz,1106,fizz,1108,1109,fizzbuzz,1111,1112,fizz,1114,buzz,fizz,1117,1118,fizz,buzz,1121,fizz,1123,1124,fizzbuzz,1126,1127,fizz,1129,buzz,fizz,1132,1133,fizz,buzz,1136,fizz,1138,1139,fizzbuzz,1141,1142,fizz,1144,buzz,fizz,1147,1148,fizz,buzz,1151,fizz,1153,1154,fizzbuzz,1156,1157,fizz,1159,buzz,fizz,1162,1163,fizz,buzz,1166,fizz,1168,1169,fizzbuzz,1171,1172,fizz,1174,buzz,fizz,1177,1178,fizz,buzz,1181,fizz,1183,1184,fizzbuzz,1186,1187,fizz,1189,buzz,fizz,1192,1193,fizz,buzz,1196,fizz,1198,1199,fizzbuzz,1201,1202,fizz,1204,buzz,fizz,1207,1208,fizz,buzz,1211,fizz,1213,1214,fizzbuzz,1216,1217,fizz,1219,buzz,fizz,1222,1223,fizz,buzz,1226,fizz,1228,1229,fizzbuzz,1231,1232,fizz,1234,buzz,fizz,1237,1238,fizz,buzz,1241,fizz,1243,1244,fizzbuzz,1246,1247,fizz,1249,buzz`);
    expect(fizzBuzzThree(1)).toEqual("1");
    expect(fizzBuzzThree(2)).toEqual("1,2");
    expect(fizzBuzzThree(3)).toEqual("1,2,fizz");
    expect(fizzBuzzThree(0)).toEqual("");
    expect(fizzBuzzThree(null)).toEqual("");
    expect(fizzBuzzThree(undefined)).toEqual("");
});
