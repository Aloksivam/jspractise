class Solution {
    public int compress(char[] chars) {
        String res = "";
        if (chars.length == 1) {
            return 1;
        } else {
            int j = 1;
            int k = 1;
            res = res + chars[0];
            for (int i = 0; i < chars.length - 1; i++) {
                if (chars[i] == chars[i + 1]) {
                    j++;
                } else {
                    if (j != 1) {
                        res = res + j;
                        res = res + chars[i + 1];
                    } else {
                        res = res + chars[i + 1];
                    }
                    j = 1;
                }
                if (i + 1 == chars.length - 1) {
                    res = res + j;
                }
            }
            // System.out.println(res);
            for (int i = 0; i < res.length(); i++) {
                chars[i] = res.charAt(i);
            }

            return res.length();
        }
    }
}