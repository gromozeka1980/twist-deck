import { useState } from 'react';
import './Card.css';

function CellContent({ cell, iconSize, isActive, interactive, onTap, cellKey }) {
  return (
    <div
      className={`card-cell ${isActive ? 'active' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onTap(cellKey);
      }}
    >
      <div className="cell-label">{cell.tableName}</div>
      <div className="cell-content">
        <img
          src={cell.iconPath}
          alt={cell.shortText}
          className="cell-icon"
          width={iconSize}
          height={iconSize}
        />
        <span className="cell-text">{cell.shortText}</span>
      </div>
      {isActive && interactive && (
        <div className="cell-tooltip">{cell.tooltip}</div>
      )}
    </div>
  );
}

export default function Card({ card, scale = 1, interactive = true }) {
  const [activeTooltip, setActiveTooltip] = useState(null);

  if (!card) return null;

  const handleCellTap = (key) => {
    if (!interactive) return;
    setActiveTooltip(activeTooltip === key ? null : key);
  };

  const handleBackdropTap = () => {
    if (activeTooltip !== null) setActiveTooltip(null);
  };

  const iconSize = scale < 0.5 ? 20 : 32;

  return (
    <div
      className="card"
      style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
      onClick={handleBackdropTap}
    >
      <div className="card-inner">
        {card.rows.map((row, rowIdx) => {
          if (row.type === 'full') {
            const key = `${rowIdx}-full`;
            return (
              <div className="card-row" key={rowIdx}>
                <CellContent
                  cell={row.cell}
                  iconSize={iconSize}
                  isActive={activeTooltip === key}
                  interactive={interactive}
                  onTap={handleCellTap}
                  cellKey={key}
                />
              </div>
            );
          }

          if (row.type === 'diagonal') {
            const keyL = `${rowIdx}-left`;
            const keyRT = `${rowIdx}-rt`;
            const keyRB = `${rowIdx}-rb`;
            return (
              <div className="card-row card-row-diagonal" key={rowIdx}>
                <CellContent
                  cell={row.left}
                  iconSize={iconSize}
                  isActive={activeTooltip === keyL}
                  interactive={interactive}
                  onTap={handleCellTap}
                  cellKey={keyL}
                />
                <div className="card-cell-diagonal-wrap">
                  <div className="diagonal-line" />
                  <div
                    className={`diagonal-top ${activeTooltip === keyRT ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCellTap(keyRT);
                    }}
                  >
                    <div className="cell-label">{row.rightTop.tableName}</div>
                    <div className="cell-content">
                      <img
                        src={row.rightTop.iconPath}
                        alt={row.rightTop.shortText}
                        className="cell-icon"
                        width={iconSize}
                        height={iconSize}
                      />
                      <span className="cell-text">{row.rightTop.shortText}</span>
                    </div>
                    {activeTooltip === keyRT && interactive && (
                      <div className="cell-tooltip">{row.rightTop.tooltip}</div>
                    )}
                  </div>
                  <div
                    className={`diagonal-bottom ${activeTooltip === keyRB ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCellTap(keyRB);
                    }}
                  >
                    <div className="cell-label">{row.rightBottom.tableName}</div>
                    <div className="cell-content">
                      <img
                        src={row.rightBottom.iconPath}
                        alt={row.rightBottom.shortText}
                        className="cell-icon"
                        width={iconSize}
                        height={iconSize}
                      />
                      <span className="cell-text">{row.rightBottom.shortText}</span>
                    </div>
                    {activeTooltip === keyRB && interactive && (
                      <div className="cell-tooltip">{row.rightBottom.tooltip}</div>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          // normal row
          const keyL = `${rowIdx}-left`;
          const keyR = `${rowIdx}-right`;
          return (
            <div className="card-row" key={rowIdx}>
              <CellContent
                cell={row.left}
                iconSize={iconSize}
                isActive={activeTooltip === keyL}
                interactive={interactive}
                onTap={handleCellTap}
                cellKey={keyL}
              />
              <CellContent
                cell={row.right}
                iconSize={iconSize}
                isActive={activeTooltip === keyR}
                interactive={interactive}
                onTap={handleCellTap}
                cellKey={keyR}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
