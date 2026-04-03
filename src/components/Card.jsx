import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './Card.css';

function TooltipOverlay({ text, anchorRect }) {
  if (!text || !anchorRect) return null;

  // Position tooltip centered below the cell
  const style = {
    position: 'fixed',
    left: Math.max(8, Math.min(anchorRect.left, window.innerWidth - 288)),
    top: anchorRect.bottom + 6,
    zIndex: 9999,
    maxWidth: 280,
  };

  // If it would go off-screen bottom, show above instead
  if (anchorRect.bottom + 100 > window.innerHeight) {
    style.top = anchorRect.top - 6;
    style.transform = 'translateY(-100%)';
  }

  return createPortal(
    <div className="card-tooltip-overlay" style={style}>
      {text}
    </div>,
    document.body,
  );
}

export default function Card({ card, scale = 1, interactive = true }) {
  const [activeKey, setActiveKey] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);

  const handleCellTap = useCallback((key, tooltip, e) => {
    if (!interactive) return;
    if (activeKey === key) {
      setActiveKey(null);
      setTooltipData(null);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      setActiveKey(key);
      setTooltipData({ text: tooltip, rect });
    }
  }, [interactive, activeKey]);

  const handleBackdropTap = useCallback(() => {
    setActiveKey(null);
    setTooltipData(null);
  }, []);

  // Close tooltip on scroll or resize
  useEffect(() => {
    if (!activeKey) return;
    const close = () => { setActiveKey(null); setTooltipData(null); };
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [activeKey]);

  if (!card) return null;

  const iconSize = scale < 0.5 ? 14 : 28;

  const renderCell = (cell, key) => (
    <div
      key={key}
      className={`card-cell ${activeKey === key ? 'active' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        handleCellTap(key, cell.tooltip, e);
      }}
    >
      <div className="cell-label">{cell.tableName}</div>
      <div className="cell-content">
        <img src={cell.iconPath} alt={cell.shortText} className="cell-icon" width={iconSize} height={iconSize} />
        <span className="cell-text">{cell.shortText}</span>
      </div>
    </div>
  );

  return (
    <div
      className="card"
      style={scale !== 1 ? { transform: `scale(${scale})`, transformOrigin: 'top center' } : undefined}
      onClick={handleBackdropTap}
    >
      <div className="card-inner">
        {card.rows.map((row, rowIdx) => {
          if (row.type === 'full') {
            return (
              <div className="card-row" key={rowIdx}>
                {renderCell(row.cell, `${rowIdx}-full`)}
              </div>
            );
          }

          if (row.type === 'diagonal') {
            const keyL = `${rowIdx}-left`;
            const keyRT = `${rowIdx}-rt`;
            const keyRB = `${rowIdx}-rb`;
            return (
              <div className="card-row" key={rowIdx}>
                {renderCell(row.left, keyL)}
                <div className="card-cell-diagonal-wrap" onClick={(e) => e.stopPropagation()}>
                  <div className="diagonal-line">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="0" y1="100" x2="100" y2="0" stroke="#d0ccc4" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                  {/* Top-left triangle */}
                  <div
                    className={`diagonal-top ${activeKey === keyRT ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCellTap(keyRT, row.rightTop.tooltip, e);
                    }}
                  >
                    <div className="cell-label">{row.rightTop.tableName}</div>
                    <div className="cell-content">
                      <img src={row.rightTop.iconPath} alt={row.rightTop.shortText} className="cell-icon" width={iconSize} height={iconSize} />
                      <span className="cell-text">{row.rightTop.shortText}</span>
                    </div>
                  </div>
                  {/* Bottom-right triangle */}
                  <div
                    className={`diagonal-bottom ${activeKey === keyRB ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCellTap(keyRB, row.rightBottom.tooltip, e);
                    }}
                  >
                    <div className="cell-label">{row.rightBottom.tableName}</div>
                    <div className="cell-content">
                      <img src={row.rightBottom.iconPath} alt={row.rightBottom.shortText} className="cell-icon" width={iconSize} height={iconSize} />
                      <span className="cell-text">{row.rightBottom.shortText}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          // normal row
          return (
            <div className="card-row" key={rowIdx}>
              {renderCell(row.left, `${rowIdx}-left`)}
              {renderCell(row.right, `${rowIdx}-right`)}
            </div>
          );
        })}
      </div>

      {/* Tooltip rendered as fixed overlay via portal */}
      {interactive && tooltipData && (
        <TooltipOverlay text={tooltipData.text} anchorRect={tooltipData.rect} />
      )}
    </div>
  );
}
