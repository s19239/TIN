function second(arr_num)
{
  arr_num.sort(function(a,b)
           {
           return a-b;
           });
  var uniq = [arr_num[0]];
  var result = [];
  
  for(var i=1; i < arr_num.length; i++)
  {
    if(arr_num[i-1] !== arr_num[i])
    {
      uniq.push(arr_num[i]);
    }
  }
    result.push(uniq[1],uniq[uniq.length-2]);
  return result.join(',');
  }

console.log(second([1,1,5,4,7]));