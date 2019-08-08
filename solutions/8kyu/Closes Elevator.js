  function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
  }

  function elevator(left, right, call) {
    if (call === 0)
      if (left < right)
        return "left";
      else
        return "right";
    else if (call === 1)
      if (left === call && right !== call)
        return "left";
      else
        return "right";
    else if (call === 2)
      if (left > right)
        return "left";
      else
        return "right";
  }