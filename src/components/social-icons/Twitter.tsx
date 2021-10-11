import React, { FC } from "react";
import { ISocialIconProps } from "./type";

export const IconTwitter: FC<ISocialIconProps> = ({ size = 16, color='white' }) => {
    const size18 = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.49 4.82998C17.5434 4.78562 17.5834 4.72733 17.6056 4.66158C17.6278 4.59583 17.6313 4.52521 17.6158 4.45758C17.6003 4.38995 17.5662 4.32796 17.5176 4.27851C17.4689 4.22906 17.4074 4.19408 17.34 4.17748L16.7475 4.02748C16.6937 4.014 16.6435 3.98871 16.6005 3.95345C16.5576 3.9182 16.5231 3.87385 16.4994 3.82362C16.4757 3.77338 16.4635 3.71852 16.4636 3.66298C16.4637 3.60744 16.4762 3.55262 16.5 3.50248L16.83 2.83498C16.8612 2.7703 16.8732 2.69803 16.8645 2.62676C16.8558 2.55548 16.8268 2.4882 16.781 2.43291C16.7352 2.37762 16.6744 2.33665 16.606 2.31486C16.5376 2.29307 16.4644 2.29137 16.395 2.30998L14.895 2.72998C14.8391 2.74628 14.7802 2.74935 14.723 2.73893C14.6657 2.72852 14.6116 2.70491 14.565 2.66998C13.9159 2.18315 13.1264 1.91998 12.315 1.91998C11.3205 1.91998 10.3666 2.31507 9.66338 3.01833C8.96012 3.72159 8.56503 4.67542 8.56503 5.66998V5.93998C8.56537 5.98605 8.54873 6.03062 8.5183 6.06521C8.48786 6.09979 8.44577 6.12196 8.40003 6.12748C6.29253 6.37498 4.27503 5.30248 2.10003 2.79748C2.05278 2.74537 1.99208 2.7073 1.9246 2.68745C1.85712 2.66761 1.78547 2.66675 1.71753 2.68498C1.65633 2.71311 1.60383 2.75721 1.56556 2.81264C1.52729 2.86807 1.50465 2.93278 1.50003 2.99998C1.19962 4.23399 1.32108 5.53305 1.84503 6.68998C1.86053 6.72067 1.8673 6.75503 1.86459 6.7893C1.86189 6.82357 1.84981 6.85644 1.82968 6.88431C1.80955 6.91218 1.78215 6.93398 1.75046 6.94733C1.71878 6.96068 1.68403 6.96505 1.65003 6.95998L0.810031 6.79498C0.750377 6.78539 0.689289 6.79036 0.631967 6.80946C0.574646 6.82856 0.522787 6.86122 0.480807 6.90467C0.438827 6.94813 0.407967 7.00108 0.390856 7.05903C0.373745 7.11697 0.370889 7.1782 0.382531 7.23748C0.447285 7.81307 0.640661 8.36672 0.948345 8.85746C1.25603 9.3482 1.67014 9.76345 2.16003 10.0725C2.19173 10.0878 2.21847 10.1118 2.23717 10.1417C2.25588 10.1715 2.2658 10.206 2.2658 10.2412C2.2658 10.2765 2.25588 10.311 2.23717 10.3408C2.21847 10.3707 2.19173 10.3946 2.16003 10.41L1.76253 10.5675C1.71426 10.5868 1.67054 10.616 1.63415 10.6532C1.59776 10.6903 1.5695 10.7347 1.55116 10.7833C1.53282 10.832 1.52481 10.8839 1.52762 10.9359C1.53044 10.9878 1.54403 11.0386 1.56753 11.085C1.78735 11.566 2.12055 11.9865 2.53855 12.3104C2.95656 12.6344 3.4469 12.8521 3.96753 12.945C4.00373 12.9581 4.035 12.9821 4.0571 13.0136C4.07921 13.0452 4.09106 13.0827 4.09106 13.1212C4.09106 13.1597 4.07921 13.1973 4.0571 13.2289C4.035 13.2604 4.00373 13.2843 3.96753 13.2975C2.9478 13.7192 1.85348 13.931 0.750031 13.92C0.650574 13.9001 0.54729 13.9205 0.462899 13.9768C0.378507 14.033 0.319922 14.1205 0.300031 14.22C0.280139 14.3194 0.300572 14.4227 0.356833 14.5071C0.413093 14.5915 0.500574 14.6501 0.600031 14.67C2.51069 15.5762 4.59092 16.0694 6.70503 16.1175C8.56462 16.1458 10.3911 15.624 11.955 14.6175C13.2414 13.7588 14.2954 12.5951 15.023 11.2302C15.7506 9.86536 16.1292 8.34167 16.125 6.79498V6.14248C16.1255 6.08803 16.1378 6.03432 16.1611 5.9851C16.1844 5.93588 16.2182 5.89234 16.26 5.85748L17.49 4.82998Z" fill={color}/>
    </svg>
    
    const size24 = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.32 6.44C23.3912 6.38085 23.4446 6.30312 23.4742 6.21546C23.5038 6.1278 23.5085 6.03364 23.4877 5.94346C23.467 5.85329 23.4217 5.77063 23.3567 5.7047C23.2918 5.63876 23.2099 5.59213 23.12 5.57L22.33 5.37C22.2582 5.35201 22.1913 5.3183 22.1341 5.27129C22.0768 5.22428 22.0308 5.16516 21.9992 5.09818C21.9676 5.0312 21.9513 4.95804 21.9515 4.88399C21.9516 4.80995 21.9682 4.73685 22 4.67L22.44 3.78C22.4816 3.69376 22.4975 3.59739 22.486 3.50236C22.4744 3.40733 22.4357 3.31762 22.3746 3.2439C22.3136 3.17019 22.2326 3.11555 22.1414 3.0865C22.0502 3.05744 21.9525 3.05519 21.86 3.08L19.86 3.64C19.7855 3.66173 19.707 3.66582 19.6306 3.65193C19.5542 3.63805 19.4821 3.60657 19.42 3.56C18.5546 2.91089 17.5019 2.56 16.42 2.56C15.094 2.56 13.8222 3.08678 12.8845 4.02446C11.9468 4.96215 11.42 6.23392 11.42 7.56V7.92C11.4205 7.98142 11.3983 8.04085 11.3577 8.08696C11.3172 8.13307 11.261 8.16263 11.2 8.17C8.39004 8.5 5.70004 7.07 2.80004 3.73C2.73704 3.66052 2.65611 3.60976 2.56613 3.58329C2.47615 3.55683 2.38062 3.55569 2.29004 3.58C2.20844 3.61751 2.13844 3.6763 2.08741 3.75021C2.03638 3.82411 2.0062 3.9104 2.00004 4C1.5995 5.64534 1.76144 7.37742 2.46004 8.92C2.48071 8.96091 2.48973 9.00672 2.48612 9.05242C2.48251 9.09812 2.46641 9.14194 2.43957 9.1791C2.41273 9.21626 2.37619 9.24533 2.33395 9.26313C2.2917 9.28092 2.24538 9.28676 2.20004 9.28L1.08004 9.06C1.0005 9.04721 0.919052 9.05383 0.842623 9.0793C0.766194 9.10476 0.69705 9.14831 0.641076 9.20625C0.585102 9.26419 0.543957 9.33479 0.521142 9.41206C0.498327 9.48932 0.494519 9.57095 0.510041 9.65C0.59638 10.4174 0.854215 11.1557 1.26446 11.81C1.67471 12.4643 2.22686 13.018 2.88004 13.43C2.92231 13.4505 2.95796 13.4824 2.9829 13.5222C3.00784 13.562 3.02107 13.608 3.02107 13.655C3.02107 13.702 3.00784 13.748 2.9829 13.7878C2.95796 13.8276 2.92231 13.8595 2.88004 13.88L2.35004 14.09C2.28568 14.1158 2.22738 14.1547 2.17886 14.2043C2.13035 14.2538 2.09266 14.3129 2.06821 14.3778C2.04376 14.4427 2.03307 14.5119 2.03683 14.5812C2.04059 14.6504 2.05871 14.7181 2.09004 14.78C2.38313 15.4213 2.8274 15.982 3.38474 16.4139C3.94208 16.8459 4.59587 17.1362 5.29004 17.26C5.3383 17.2775 5.38 17.3095 5.40947 17.3515C5.43894 17.3936 5.45475 17.4437 5.45475 17.495C5.45475 17.5463 5.43894 17.5964 5.40947 17.6385C5.38 17.6805 5.3383 17.7125 5.29004 17.73C3.9304 18.2923 2.47131 18.5746 1.00004 18.56C0.867433 18.5335 0.72972 18.5607 0.617198 18.6357C0.504676 18.7108 0.426562 18.8274 0.400041 18.96C0.373519 19.0926 0.400762 19.2303 0.475777 19.3428C0.550791 19.4554 0.667433 19.5335 0.800041 19.56C3.34759 20.7682 6.12122 21.4259 8.94004 21.49C11.4195 21.5278 13.8548 20.832 15.94 19.49C17.6553 18.345 19.0606 16.7935 20.0307 14.9737C21.0008 13.1538 21.5056 11.1222 21.5 9.06V8.19C21.5007 8.11739 21.5171 8.04578 21.5482 7.98016C21.5792 7.91453 21.6243 7.85647 21.68 7.81L23.32 6.44Z" fill={color}/>
    </svg>    
    
    switch (size.toString()) {
        case '16':
            return size18;
        case '24':
            return size24;
        default:
            return size18;
    }
}