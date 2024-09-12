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

// Solution 2: Time complexity: O(n^2) - Space complexity: O(n)
function finalPrices(prices){
    let answer = [];
    for (let i = 0; i < prices.length; i++){
        for (let j = i + 1; j < prices.length; j++){
            if (prices[j] <= prices[i]){
                discount = prices[j];
                break;
            } else {
                discount = 0;
            }
        }
        answer.push(prices[i] - discount);
    }
    return answer;
}

// Solution 3: Use stack - Time complexity: O(n) - Space complexity: O(n)
function finalPrices(prices){
    let answer = [];
    let stack = [];
    stack.push(prices[prices.length-1]);
    answer.unshift(prices[prices.length-1]);
    for (let i=prices.length-2; i >= 0; i--){
    
        while (stack.length >0 && prices[i] < stack[stack.length-1]){
            stack.pop();
        };

        if (stack.length == 0){
            answer.unshift(prices[i]);
        } else{
            answer.unshift(prices[i]-stack[stack.length-1]);
        };

        if (prices[i] !== stack[stack.length-1]){
            stack.push(prices[i]);
        };
        
    };
    return answer;
};
