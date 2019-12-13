https://www.codewars.com/kata/surface-area-and-volume-of-a-box/train/javascript

//Write a function that returns the total surface area and volume of a box as an array: [area, volume]

const getSize = (w, h, d) => [(2*d*w + 2*d*h + 2*w*h), w*h*d];

/*Test.assertEquals(getSize(4, 2, 6)[1], 48);
Test.assertSimilar(getSize(10, 10, 10), [600, 1000]);
Test.assertEquals(getSize(4, 2, 6)[0], 88);
Test.assertEquals(getSize(4, 2, 6)[1], 48);*/