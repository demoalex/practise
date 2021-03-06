/**
*   https://app.devdraft.com/#!/workspace/fb4a2d0f-effb-4a8d-a3e8-f7c90d7a87b4
*/


describe("Attractions visitor task test suite", function(){

    /**
     * Input:
     * 6
     * 4 2 5 1 3 8
     * 3
     * 2
     * 0 1
     * 3
     * 0 5 3
     * 4
     * 0 4 2 5
     *
     * Output:
     * 4
     * 12
     * 26
     *
     * Explanation:
     * This is the same park as the previous example, with the 6 attractions and same times to walk between attractions.  However, now we have 3 guests rather than just one.  The first guest visits 2 attractions by walking from attraction 0 directly to 1 for a total of 4 minutes.  The second guest visits 3 attractions by walking from attraction 0 to 5 in 8 minutes, then from 5 to 3 in 4 minutes for a total of 12 minutes spent walking.  The third guest's movements are described in the previous example.
     */
    it("3 queries", function(){
        var input = [
            [ 6 ],
            [ 4, 2, 5, 1, 3, 8 ],
            [ 3 ],
            [ 2 ],
            [ 0, 1 ],
            [ 3 ],
            [ 0, 5, 3 ],
            [ 4 ],
            [ 0, 4, 2, 5 ]
        ];
        var advice = new attractionVisitor(input);

        expect(advice.clockwise(0,5)).toEqual(15);
        expect(advice.clockwise(0,1)).toEqual(4);
        expect(advice.clockwise(2,3)).toEqual(5);

        expect(advice.xclockwise(0,5)).toEqual(8);
        expect(advice.xclockwise(0,1)).toEqual(19);
        expect(advice.xclockwise(2,3)).toEqual(18);

        expect(advice.solve()).toEqual([4, 12, 26]);
    });

    /**
     * Input:
     * 7
     * 5 4 6 3 7 2 8
     * 2
     * 4
     * 0 4 6 3
     * 4
     * 0 5 1 3
     *
     * Output:
     * 38
     * 35
     *
     */
    it("2 queries", function(){
        var input = [
            [ 7 ],
            [ 5, 4, 6, 3, 7, 2, 8 ],
            [ 2 ],
            [ 4 ],
            [ 0, 4, 6, 3 ],
            [ 4 ],
            [ 0, 5, 1, 3 ]
        ];
        var advice = new attractionVisitor(input);

        expect(advice.solve()).toEqual([38, 35]);
    });
});
