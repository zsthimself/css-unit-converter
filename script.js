// 定义DPI（每英寸像素数）
const DPI = 96;

// 单位转换比例
const UNITS = {
    px: {
        cm: 1 / (DPI / 2.54),
        mm: 1 / (DPI / 25.4),
        in: 1 / DPI,
        pt: 72 / DPI
    },
    cm: {
        px: DPI / 2.54,
        mm: 10,
        in: 1 / 2.54,
        pt: 72 / 2.54
    }
};

// 初始化转换器
function initializeConverters() {
    // 像素转换器
    const pixelsInput = document.getElementById('pixels');
    const pixelUnit = document.getElementById('pixelUnit');
    const pixelResult = document.getElementById('pixelResult');

    // 厘米转换器
    const centimetersInput = document.getElementById('centimeters');
    const cmUnit = document.getElementById('cmUnit');
    const cmResult = document.getElementById('cmResult');

    // 添加事件监听器
    pixelsInput.addEventListener('input', () => {
        const value = parseFloat(pixelsInput.value);
        const unit = pixelUnit.value;
        if (!isNaN(value)) {
            const result = value * UNITS.px[unit];
            pixelResult.textContent = `${value} px = ${result.toFixed(2)} ${unit}`;
        } else {
            pixelResult.textContent = '请输入有效数值';
        }
    });

    centimetersInput.addEventListener('input', () => {
        const value = parseFloat(centimetersInput.value);
        const unit = cmUnit.value;
        if (!isNaN(value)) {
            const result = value * UNITS.cm[unit];
            cmResult.textContent = `${value} cm = ${result.toFixed(2)} ${unit}`;
        } else {
            cmResult.textContent = '请输入有效数值';
        }
    });

    // 单位选择变化时重新计算
    pixelUnit.addEventListener('change', () => pixelsInput.dispatchEvent(new Event('input')));
    cmUnit.addEventListener('change', () => centimetersInput.dispatchEvent(new Event('input')));
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeConverters); 