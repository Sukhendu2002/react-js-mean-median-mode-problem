const  dataSet1 = [
  30, 28, 76, 70, 37, 77, 27, 28, 10, 67, 51, 63, 99, 90, 98, 30, 75, 4, 77, 25,
  49, 68, 58, 98, 19, 15, 41, 67, 54, 84, 77, 72, 58, 45, 66, 31, 89, 67, 40,
  76, 81, 3, 91, 56, 62, 90, 54, 78, 97, 68, 99, 15, 41, 99, 12, 78, 5, 63, 33,
  46, 65, 75, 9, 82, 74, 55, 96, 44, 76, 85, 63, 68, 44, 34, 28, 29, 47, 67, 82,
  54, 74, 41, 86, 83, 44, 6, 63, 61, 43, 80, 36, 80, 10, 25, 29, 6, 62, 82, 7,
  40, 22, 92, 67, 86, 49, 5, 88, 39, 91, 72, 54, 74, 89, 51, 35, 49, 35, 8, 34,
  52, 44, 93, 42, 66, 44, 22, 9, 80, 28, 59, 81, 35, 33, 58, 66, 69, 42, 10, 13,
  68, 60, 75, 23, 48, 13, 76, 0, 52, 26, 88, 16, 49, 23, 3, 34, 72, 70, 39, 36,
  68, 16, 27, 11, 18, 12, 80, 35, 29, 7, 33, 10, 93, 86, 58, 55, 81, 38, 91, 13,
  88, 41, 57, 21, 0, 90, 63, 11, 36, 55, 5, 13, 3, 21, 98, 32, 35, 9, 95, 86,
  77, 1, 72, 59, 27, 52, 71, 15, 69, 82, 86, 70, 99, 77, 16, 91, 37, 19, 71, 86,
  38, 2, 10, 82, 57, 37, 19, 71, 16, 2, 77, 46, 9, 74, 33, 89, 99, 13, 96, 17,
  41, 1, 52, 82, 58, 13, 64, 55, 73, 0, 38, 64, 18, 31, 1, 77, 52, 36, 60, 84,
  78, 2, 71, 41, 58, 95, 69, 5, 74, 45, 0, 42, 97, 18, 62, 60, 45, 5, 86, 86,
  14, 78, 45, 35, 30, 14, 32, 14, 83, 87, 96, 13, 81, 18, 47, 71, 25, 15, 70, 8,
  87, 71, 59, 31, 16, 97, 94, 45, 96, 82, 96, 46, 80, 91, 37, 44, 72, 38, 6, 55,
  92, 78, 87, 32, 95, 15, 12, 56, 10, 59, 62, 0, 25, 59, 1, 87, 28, 81, 46, 42,
  60, 14, 40, 35, 77, 34, 14, 97, 11, 23, 99, 99, 36, 37, 7, 11, 7, 21, 85, 44,
  54, 29, 41, 92, 18, 93, 51, 61, 43, 74, 97, 12, 76, 52, 81, 7, 35, 57, 46, 20,
  90, 20, 87, 31, 27, 51, 54, 61, 12, 86, 85, 8, 75, 99, 37, 38, 32, 5, 52, 29,
  92, 52, 0, 83, 1, 26, 90, 73, 65, 25, 51, 14, 31, 68, 45, 54, 26, 39, 17, 32,
  30, 28, 4, 55, 94, 86, 52, 34, 23, 8, 61, 14, 95, 72, 72, 24, 2, 92, 99, 37,
  1, 86, 69, 38, 33, 77, 69, 91, 6, 76, 16, 2, 61, 93, 40, 78, 43, 13, 39, 61,
  37, 99, 93, 98, 4, 48, 27, 37, 73, 55, 91, 73, 35, 75, 64, 89, 91, 30, 31, 15,
  81, 56, 93, 99, 13, 15, 68, 26, 53, 60, 43, 49, 14, 52, 78, 20, 40, 19, 56,
  90, 33, 50, 25, 22, 33, 13, 18, 37, 30, 48, 22, 76, 73, 43, 23, 70, 23, 78,
  52, 47, 20, 49, 92, 13, 93, 18, 61, 42, 83, 37, 52, 22, 90, 77, 89, 63, 75,
  55, 69, 0, 38, 29, 7, 26, 4, 68, 45, 47, 87, 28, 3, 87, 92, 27, 50, 83, 69,
  29, 91, 9, 5, 55, 28, 94, 0, 13, 30, 55, 21, 23, 29, 9, 30, 67, 7, 94, 73, 90,
  94, 42, 10, 35, 64, 5, 50, 22, 78, 45, 87, 78, 46, 87, 44, 96, 47, 11, 55, 94,
  77, 97, 4, 12, 68, 95, 24, 65, 8, 96, 46, 55, 26, 89, 43, 46, 5, 87, 83, 91,
  62, 21, 97, 60, 17, 7, 95, 84, 84, 34, 42, 6, 43, 73, 82, 76, 63, 66, 66, 2,
  71, 12, 1, 73, 76, 23, 11, 97, 23, 87, 18, 46, 74, 10, 85, 25, 66, 5, 30, 14,
  95, 20, 89, 69, 35, 62, 36, 57, 93, 87, 30, 71, 34, 24, 42, 76, 28, 66, 98,
  26, 46, 85, 17, 12, 57, 77, 76, 85, 39, 90, 27, 35, 84, 84, 85, 68, 39, 85,
  63, 19, 41, 24, 12, 97, 25, 9, 40, 84, 33, 18, 26, 40, 22, 50, 60, 52, 1, 38,
  2, 72, 72, 98, 63, 63, 56, 28, 92, 12, 34, 71, 32, 24, 27, 92, 75, 15, 18, 17,
  62, 2, 52, 37, 37, 26, 66, 92, 59, 33, 72, 10, 79, 52, 34, 42, 79, 35, 1, 64,
  78, 45, 32, 83, 44, 58, 28, 87, 33, 73, 83, 0, 69, 55, 30, 80, 53, 88, 14, 33,
  31, 84, 14, 99, 2, 67, 80, 67, 54, 77, 12, 29, 98, 36, 4, 0, 92, 71, 53, 37,
  54, 50, 1, 84, 15, 92, 63, 5, 8, 24, 75, 12, 20, 55, 34, 30, 63, 47, 8, 29,
  35, 52, 34, 75, 40, 40, 93, 87, 83, 78, 30, 24, 94, 48, 60, 16, 15, 44, 93,
  46, 53, 88, 51, 32, 96, 45, 5, 76, 97, 78, 63, 74, 21, 60, 34, 67, 81, 58, 63,
  7, 13, 55, 8, 42, 89, 38, 32, 74, 73, 65, 21, 85, 81, 98, 18, 41, 15, 18, 46,
  31, 21, 48, 98, 47, 4, 40, 37, 61, 28, 71, 31, 86, 68, 24, 72, 55, 50, 72, 7,
  11, 97, 69, 98, 49, 67, 71, 39, 22, 54, 66, 30, 39, 81, 93, 70, 59, 24, 84,
  31, 58, 19, 5, 30, 43, 65, 43, 79, 87, 7, 98, 87, 68, 23, 62, 14, 84, 24, 54,
  98, 78, 24, 69, 79, 60, 90, 81, 2, 75, 53, 51, 93, 26, 14, 99, 64, 40, 57, 7,
  73, 18, 17, 99, 15, 87, 2, 2, 48, 88, 13, 77, 66, 86, 21, 48, 36, 70, 62, 41,
  7, 28, 13, 65, 69, 4, 14, 43, 44, 85, 22, 88, 62, 77, 31, 78, 74, 12, 56, 32,
  72, 0, 39, 87, 26, 77, 88, 22, 24, 8, 89, 30, 28, 26, 22, 75, 50, 97, 56, 29,
  40, 88, 38, 76, 15, 36, 65, 59, 31, 45, 47, 2, 90, 48, 64, 61, 98, 57, 76, 4,
  29, 99, 40, 74, 1, 95, 54, 44, 10, 49, 10, 40, 73, 27, 37, 22, 65, 17, 72, 60,
  22, 94, 93, 68, 3, 50, 1, 6, 42, 77, 46, 30, 95, 82, 35, 60, 63, 36, 29, 26,
  16, 4, 25, 17, 86, 10, 26, 18, 17, 76, 19, 46, 31, 72, 92, 68, 18, 24, 19, 40,
  31, 53, 3, 93, 42, 64, 25, 9, 77, 4, 2, 97, 38, 54, 49, 49, 25, 46, 46, 82,
  29, 10, 49, 58, 14, 50, 26, 9, 8, 67, 27, 81, 30, 4, 55, 94, 78, 53, 31, 37,
  24, 66, 77, 52, 64, 71, 31, 39, 91, 5, 67, 86, 8, 43, 57, 45, 29, 57, 30, 47,
  34, 17, 52, 80, 35, 63, 91, 40, 0, 33, 87, 35, 4, 9, 11, 21, 95, 77, 32, 63,
  59, 12, 63, 84, 68, 79, 9, 77, 73, 90, 77, 4, 30, 67, 66, 16, 12, 73, 92, 0,
  49, 74, 81, 77, 34, 57, 68, 62, 64, 34, 31, 18, 43, 15, 21, 67, 66, 2, 23, 72,
  60, 91, 40, 87, 90, 99, 6, 40, 2, 53, 84, 54, 53, 69, 74, 68, 26, 3, 63, 11,
  21,
];

export default dataSet1;