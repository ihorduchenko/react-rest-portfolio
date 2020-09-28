const siteRESTUrl = 'https://wp-rest-api.cloudaccess.host/wp-json/';
// const siteRESTUrl = 'http://ihor-duchenko.zzz.com.ua/wp-json/';

export const API_BASE = siteRESTUrl + 'wp/v2';
export const WP_OPTIONS_API_BASE = siteRESTUrl + 'acf/v3/options/options';

export const POSTS_API_BASE = 'posts';
export const PAGES_API_BASE = 'pages';
export const CASES_API_BASE = 'portfolio-item';

export const SLUG_HOME = 'home';
export const SLUG_ABOUT = 'about';
export const SLUG_CONTACT = 'contact';

export const DEF_POST_THUMB = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAF3CAYAAABT8rn8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI5OTQ1RTMyRTk0MjExRTM4MkEwODdBMzI4REI1M0I3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI5OTQ1RTMzRTk0MjExRTM4MkEwODdBMzI4REI1M0I3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTAxQ0UwNjdFOTQwMTFFMzgyQTA4N0EzMjhEQjUzQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTAxQ0UwNjhFOTQwMTFFMzgyQTA4N0EzMjhEQjUzQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7cPWvWAAAPn0lEQVR4Xu3d24tWddjH4WWWm3TA1MrMMjUoooIOLLdZGiKTSlTgP1knSRSVIFIHFdFJIUUH0e5AbQu5aaNv3/W6fAffGR3HWc/mfq4LFjOOzqYZ8/Pcv7V+61ly+vTpKw0AMJYuX77cTK2eau64+msAYIwJOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAUtOnz595errUNYdd3jsOqmuXLnSHlDV5cuXm6nVU4JOff/++2/z559/NkuWLLn6FiZJfu5TU1OiTlmCzkTIZH7mzJnmxIkTzfLly6++lUmRf+hWrFjRHDlypH1gBxUJOhMhQT937lxz6tQpQZ9A+YcuP/dDhw41//zzz9W3Qi1d0J1YBIACBB0AChB0AChA0AGgAEFn4mU7Uy4qcYzvAbixDMXd7Cr3xDx/ZuXKlfYpj7HcZ2C2mwcl9q5yp7r8PbdtjfJuFvTsTV67dm37D/6lS5euvpVxkZvG/PXXX82bb77Z7je/nqAzCQSdiTCfoK9Zs6bZv39/GwbGS4L+999/N8ePHxd0JlYXdOfQAaAAQQeAAgQdAAoQdAAoQNBhHnLxlWN4B3BzrnKntMW4yj1XkJ4/f37Wfc70K/cGSNBXrVo1630C8nuucmfS2bbGRLjdoOf9f/755+a9996b9f3pVyKe7/vRo0dnDbKgg21rMG+JeqKwbNkyxxCOu+66y7I7zIOgwzwlKo7BHsD8CToAFCDoAFCAoANAAYIOIyBXc3dHrljNMfNtADcj6DBEiXW2U2XLXJ6+Nb/uruzOdqy8LS+7wAPMRdBhCLqQ59i0aVOzd+/e5rXXXmtef/315vDhw+2+62PHjjUvv/xy88wzz7Q3Vkn0hR2Yi6DDgCXImbwffPDBZnp6utmxY0dz7733trG+cOFC+3sXL15sj+x/37p1a3Pw4MFm3759zZ133tk+CBB14HqCDgOUaCfIe/bsaXbt2tUurSfgeftsukk+0/n69eubI0eOtBN9fi3qwEyCDgOSAOdWswcOHGg2btzYTuC3EuW8b0K+c+fOZtu2be25dVEHOoIOA5DwZhLPVJ57xyfGC5WPs3379nZiT+QBQtBhALJsnnPhOW9+OzHvJOq7d+9u7zNvSgdC0KFnCW7uS/7000+3S+aLIR8z598fe+yxRXmAAIw/QYeeZVl88+bN7RXrizlNJ+SPP/54+zFN6YCgQ48S2gT94YcfbpfdF9vSpUubDRs2zHmVPDA5BB0GoNtnvtjyYEHQgRB06FEm9JUrV7aTdB8S8qmpKUEHBB36tmLFil7PcefcPICgQ8/6np5N50AIOvQo29Vyf/bsF+9DPn7uOJeXwGQTdOhZ9p6fP3++l+jmY/7666+9Bt2WOBgPgg49S2zPnDnTy5SeZ1/76aefervoLjHPkr5lfRh9gg49SswT22+++WbRo5uP/ccff/Q6oWdbXJ4IJlfqizqMNkGHnmUyP3v2bPPbb78t6pS+bNmy5osvvmhvAdtH0Lub4uT+80888YRnd4MRJ+jQs8Q2S+Mff/xxG9/FkGk/DxK+++67Xpfbs+XunnvuaR566KFm1apVgg4jTNBhADKZZ3n8888/v+194/lYCeuHH37Y23QeWWLPXejygCGvP/nkk4v25DLA4hN0GIBEN/H96quvmi+//LKdfBcicU3M33///XY5vI8L7Tq59/wjjzzSvsznyut33323c+kwogQdBiRRz3Se894fffRRuwyfYz7yvjln/vvvvzfvvPNOuw1uvu+7EHnQkM+3fv36awFP2PMUsM6lw2gSdBigLsw//vhj8/bbbzfffvttO63nbZm+M3Hnz+TI64l2fj8x/fTTT5sPPvignZb7jHnkc2zcuLH9Ojp5W541LlO6oMPoEXQYsEQyy++J9Geffda88cYbzSeffNL88MMP7Xn23Pktd5f75Zdfmq+//ro5ceJE89Zbb7UXwCX8fS6zR2KdqTxL7In4THn7U0895Vw6jCBBhyFJmBP2vPz+++/bqOfceJbU33333ebkyZPt8nz2mWepPhP8zIm5T/m6ZnvK15lTunPpMFoEHYaoW17PEnqm7275PUcinrB2IR9UzLvl9rlWAjLB51x6VhgsvcPoEHQYMYOM9/US6IR68+bN7cvZdL+fBx+CDqND0IFrEuiEet26dTdcUs8UnynduXQYHYIOXJOIP/DAA+0y/40k6Ll73OrVq51LhxEh6EAr03l30Vtezod7vMPoEHTgmlycl9u9zmfqzrn07pnYBB2GT9CBVqbyPLParch0nn3peQkMl6AD7YSdibu7d/t85UHApk2b2i12pnQYLkEH2hhn6Xzt2rW3fJFblulzE5r5nncH+iHoQBvx+++/v72Rza3KRL9lyxZBhyETdJhwmc4T4xvdTOZG8mCgeyIXy+4wPIIOtLd5zf7zhe4pT8hzLt2UDsMj6DDhEuHcJGahMY9M9pnw87FM6TAcgg4TLPGdGeOFyoOBXBiXJ5UBhkPQYQJ1580vXbrUPhXqze7dPh+5oO6+++6z7A5DIugwIWZGPEfiu2vXrubgwYNX/8Ttyce+3UkfWDhBh6IS8JkRz+uJ+M6dO5tjx441e/bsWdSr0/N5uid2WYyPB9waQYdiuojndqw5P55z25nEp6enr0U8T3uaY7Gn6e5qeVM6DJ6gw5hLwLuIZxLPufBM4s8991zz6quvNnv37m0jm0m8j4jPlI/tancYDkGHMTVzEs/LTOJZTj98+HA7ieeJVjKh9x3xmfJ5FnrHOeD2CDqMiesn8cS6m8SPHj3aPP/88+1yegwy4tfLvd0T9WF9fphUgg4jrot4It3t996xY0fzyiuvNLt3724n8fyZRH4UIpoHGnnWNkGHwRJ0GGEJdUKeSTwRz3J6zokn4ol7t9w+SvJ1ZULPpJ6vHxgMQYcRlTBm2n3xxRfb5fREPIa5nD5frnaHwRN0GEGJeZbQE/L169c3Fy9eHKs45uvP/eHzNZvSYTAEHUZMN5kfOHCgPV+eZfVxk5DnAr0suwODIegwQhLzBHzfvn3tZD6OMe9k2X3Dhg2W3WFABB1GxMxz5uM6mc/UXe2el0D/BB1GQBfzCpN5J/9NeWCyfPly59FhAAQdhqxbZn/hhRdKTOYzeUpVGBxBhyHK5JrJPDGvMpnP1C2757/LlA79EnQYkgTuwoUL7TnzijGPrD5kP/rWrVvbbXhAfwQdhqBbZn/ppZeadevWlb5wLP+dud/8o48+2u6nN6lDPwQdBiwxz93eKl0AdzOZzrdv395s2bKlfV3UYfEJOgxQYp5pvMrWtFuR6Tz3o9+2bZuoQw8EHQakW2bPZD5pMe8k6t2knlUKUYfFI+gwAF3MJ3Eyv16m80zqlt9hcQk6zEOis9CjW2avujVtITKpP/vss+3yezepz3UA8yPocBNdVK4PzXyPBH2Sl9nnMvNCuTzgme1715n5OjC7JadPn/Z/CmXlCULOnTvXnDp1qr0F6fVyB7M1a9Y0+/fvbyfF2SxZsqRZunRp+3IhEqNEPQf/X/eMbHN9f/P9m2tbX94nD5KOHz/erFix4upb/0++5/m5Hzp0qPTWQCZb/p5PrZ4yocPNdEFJOBZy5H3FfG75/tzo+yvEMD+CDgAFCDoAFCDoAFCAoANAAYIO/1noFewMV35ufnbwvwQd/tNtK3OM35Gth8B/D3DtQ6eym+1D725YkjAwnropfbZJPT9X+9CpLn/P7UNn4nURSPgd43nMFXOYNILOxOuC4BjfAxB0AChB0AGgAEEHgAIEnYmQq9kdk3fM/NlDdbatUVqugj579mxz8uTJZtmyZVffyqRIyLNtbXp62n51yuq2rQk65eUq6ISdySXmVCboAFCAG8sAQCGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgAFCDoAFCDoAFCAoANAAYIOAAUIOgAUIOgAUICgA0ABgg4ABQg6ABQg6ABQgKADQAGCDgBjr2n+B8JmE08q94UJAAAAAElFTkSuQmCC';