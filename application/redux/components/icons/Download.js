const React = require('react')

const Download = (p) => (
    <div className="icon">
        <svg width="32px" height="30px" viewBox="0 0 32 30">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={p.fill} fillRule="nonzero">
                    <g>
                        <path d="M25.5946667,23.3173333 L6.40497778,23.3173333 L6.40497778,16.9212444 L0.00817777778,16.9212444 L0.00817777778,27.9008 C0.00817777778,28.9024 0.744533333,29.7141333 1.65297778,29.7141333 L30.3466667,29.7141333 C31.2544,29.7141333 31.9914667,28.9027556 31.9914667,27.9008 L31.9914667,16.9212444 L25.5946667,16.9212444 L25.5946667,23.3173333 Z"></path>
                        <polygon points="19.1982222 12.9461333 19.1982222 0.153955556 12.8017778 0.153955556 12.8017778 12.9461333 8.82702222 12.9461333 16 20.1187556 23.1726222 12.9461333"></polygon>
                    </g>
                </g>
            </g>
        </svg>
    </div>
)

module.exports = Download