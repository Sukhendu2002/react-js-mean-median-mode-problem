# react-js-mean-median-mode-problem

ReactJS Problem Set 

Objective 
Develop a Single Page App (SPA) that shows a simple dashboard that displays four tiles, each displaying a  single statistic for a dataset. The user should request new data to be loaded and see the statistics in the tiles update to reflect the new dataset. You may create your APIs or use Firebase.
Requirements 
1. The app shall be implemented using ReactJS components and developed using either JavaScript or TypeScript, with the latter preferred. 
2. The app shall display four statistics tiles: Mean, Median, Standard Deviation and Mode. 
3. The app shall present a button that, when clicked, will cause a new dataset to be loaded (replacing the current dataset) and the dashboard display to be updated to reflect the newly loaded data. 
4. The app shall present an input field that will accept a number and a submit button which, when clicked, will cause the number to be added to the currently loaded dataset and the dashboard tiles to update to reflect the new dataset state. 
5. Please do not use any math package, and kindly share the GitHub link once done.  
Guidance 
The appearance of the app and implementation approach is up to you. Don’t spend more than 2 hours. Timebox the effort and prioritize your time on what you think are the most important aspects.  There is no right or wrong answer. 
Dataset 
The dataset will consist of an array of numbers delivered in the form of a JSON document with the  following structure: 
{ 
 “data”: [ 
 123, 
 …. 
 987 
 ] 
} 
Dashboard Tiles 
1. Mean – https://en.wikipedia.org/wiki/Arithmetic_mean 
2. Median – https://en.wikipedia.org/wiki/Median 
3. Standard Deviation – https://en.wikipedia.org/wiki/Standard_deviation 
4. Mode – https://en.wikipedia.org/wiki/Mode_(statistics) 



Expected Results 

Example 1
data-1234.json 

Mean 
49.457050
Median 
49.000000
StdDev 
28.810315
Mode 
77.000000



After adding 42                                              
Mean 
49.451012                                   
Median 
49.000000
StdDev 
28.799421
Mode 
77.000000





Example 2
data-4321.json

Mean 
50.346679
Median 
51.000000
StdDev 
29.191159
Mode 
82.000000



After adding 42   

Mean 
50.344748
Median 
51.000000
StdDev 
29.188057
Mode 
82.000000




