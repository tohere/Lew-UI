import tippy from 'tippy.js';
import type { App as Application, DirectiveBinding } from 'vue';
let instance;

export default {
    install(app: Application) {
        app.directive('tooltip', {
            mounted(el: HTMLElement, binding: DirectiveBinding) {
                let trigger = binding.value.trigger;
                if (trigger == 'hover') {
                    trigger = 'mouseenter';
                }
                instance = tippy(el, {
                    trigger: trigger || 'mouseenter',
                    content: binding.value.content,
                    animation: 'shift-away-subtle',
                    interactive: true,
                    appendTo: () => document.body,
                    placement: binding.value.placement,
                    allowHTML: binding.value.allowHTML,
                    arrow: binding.value.arrow,
                    maxWidth: 250,
                    onShow(instance) {
                        const node = document.getElementsByTagName('html')[0];
                        if (node.classList.contains('lew-dark')) {
                            instance.popper.children[0].setAttribute(
                                'data-theme',
                                'dark',
                            );
                        } else {
                            instance.popper.children[0].setAttribute(
                                'data-theme',
                                'light',
                            );
                        }
                    },
                });
                instance.popper.children[0].setAttribute('data-lew', 'tooltip');
            },
            updated(el: HTMLElement, binding: DirectiveBinding) {
                instance.setContent(binding.value.content);
            },
            unmounted() {
                instance = null;
            },
        });
    },
};
