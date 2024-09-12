// Solution 1: Time complexity: O(n^2) - Space complexity: O(n)
function finalPrices(prices){
    let answer = [];
    for (let i=0; i < prices.length; i++){
        let discount=0;
        for (let j=i+1; j < prices.length; j++){
            if (prices[j] <= prices[i]){
                discount = prices[j];
                break;
            };
        };
        answer.push(prices[i]-discount);
    };
    return answer;
};
console.log(finalPrices([8,7,1]))

