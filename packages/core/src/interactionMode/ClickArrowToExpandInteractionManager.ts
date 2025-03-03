import {
  InteractionMode,
  InteractionManager,
  TreeEnvironmentContextProps,
  TreeItem,
  TreeItemActions,
  TreeItemRenderFlags,
} from '../types';
import { HTMLProps } from 'react';

export class ClickArrowToExpandInteractionManager implements InteractionManager {
  public readonly mode = InteractionMode.ClickItemToExpand;
  private environment: TreeEnvironmentContextProps;

  constructor(environment: TreeEnvironmentContextProps) {
    this.environment = environment;
  }

  createInteractiveElementProps(
    item: TreeItem,
    treeId: string,
    actions: TreeItemActions,
    renderFlags: TreeItemRenderFlags
  ): HTMLProps<HTMLElement> {
    return {
      onClick: e => {
        actions.focusItem();
        if (e.shiftKey) {
          actions.selectUpTo();
        } else if (e.ctrlKey || e.metaKey) {
          if (renderFlags.isSelected) {
            actions.unselectItem();
          } else {
            actions.addToSelectedItems();
          }
        } else {
          actions.selectItem();
          if (!item.hasChildren || this.environment.canInvokePrimaryActionOnItemContainer) {
            actions.primaryAction();
          }
        }
      },
      onFocus: () => {
        actions.focusItem();
      },
      onDragStart: e => {
        e.dataTransfer.dropEffect = 'move'; // TODO
        // e.dataTransfer.setDragImage(environment.renderDraggingItem(viewState.selectedItems), 0, 0);
        actions.startDragging();
      },
      onDragOver: e => {
        e.preventDefault(); // Allow drop
      },
      draggable: renderFlags.canDrag && !renderFlags.isRenaming,
      tabIndex: !renderFlags.isRenaming ? (renderFlags.isFocused ? 0 : -1) : undefined,
    };
  }
}
