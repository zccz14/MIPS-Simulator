var React = require('react');

module.exports = React.createClass({
    displayName: 'Machine',
    getInitialState: function(){
        return {
            CPU: {
                PC:    0x00040000,
                Cycle: 0,
                Inst:  0x3c011000,
                Stall: 0,
                $zero: 0x00000000,
                $at:   0x00040000,
                $v0:   0x00000000,
                $v1:   0x00000000,
                $a0:   0x10000000,
                $a1:   0x00000000,
                $a2:   0x00000000,
                $a3:   0x00000000,
                $t0:   0x00000068,
                $t1:   0x00000000,
                $t2:   0x00000000,
                $t3:   0x00000000,
                $t4:   0x00000000,
                $t5:   0x00000000,
                $t6:   0x00000000,
                $t7:   0x00000000,
                $s0:   0x10000000,
                $s1:   0x00000000,
                $s2:   0x00000000,
                $s3:   0x00000000,
                $s4:   0x00000000,
                $s5:   0x00000000,
                $s6:   0x00000000,
                $s7:   0x00000000,
                $t8:   0x00000000,
                $t9:   0x00000000,
                $k0:   0x00000000,
                $k1:   0x00000000,
                $gp:   0x10008000,
                $sp:   0x7ffffffc,
                $fp:   0x00000000,
                $ra:   0x00040024
            },
            memory: []
        }
    },
    render: function(){
        return (
            <div>
            </div>
        );
    }
})