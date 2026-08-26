'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';

type LocalizedText = {
  zh: string;
  en: string;
};

type CopyBlock = {
  heading?: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
};

type CellCategory = {
  slug: string;
  folder: string;
  kicker: string;
  title: LocalizedText;
  shortTitle: LocalizedText;
  summary: LocalizedText;
  blocks: CopyBlock[];
  images: string[];
};

const assetRoot = '/圣娅医院素材/细胞';

const cellCategories: CellCategory[] = [
  {
    slug: 'neural-stem-cells',
    folder: 'SL 神经干细胞',
    kicker: 'NEURAL STEM CELLS',
    title: { zh: 'SL·神经干细胞', en: 'SL Neural Stem Cells' },
    shortTitle: { zh: '神经干细胞', en: 'Neural Stem Cells' },
    summary: {
      zh: '以细胞再生之力，修护受损脑神经，持久守护大脑健康。',
      en: 'Exploring cellular regeneration to support neural repair and long-term brain health.',
    },
    blocks: [
      {
        bullets: [
          { zh: '再生神经元，修复受损神经组织', en: 'Support neuron regeneration and the repair of damaged neural tissue' },
          { zh: '长效滋养脑部，舒缓脑疲劳、失眠', en: 'Provide sustained brain support and help ease mental fatigue and sleep concerns' },
          { zh: '改善记忆衰退，提升专注力与思维力', en: 'Support memory, focus and cognitive performance' },
          { zh: '调节脑部炎症，稳定神经系统状态', en: 'Help regulate neuroinflammation and support nervous-system stability' },
          { zh: '延缓大脑老化，改善各类神经亚健康', en: 'Support healthy brain ageing and address neurological sub-health concerns' },
        ],
      },
    ],
    images: [
      'Weixin Image_2026-08-26_134552_663.jpg',
      'Weixin Image_2026-08-26_134618_015.jpg',
      'Weixin Image_2026-08-26_134623_903.jpg',
    ],
  },
  {
    slug: 'nkt-cells',
    folder: 'NK-T超级免疫细胞',
    kicker: 'IMMUNE CELL PROGRAMME',
    title: { zh: 'NK-T超级免疫细胞', en: 'NK-T Immune Cells' },
    shortTitle: { zh: 'NK-T免疫细胞', en: 'NK-T Cells' },
    summary: {
      zh: '为精英体质注入“免疫活力剂”的顶配健康管理方案。',
      en: 'A high-level health management programme designed to support immune vitality.',
    },
    blocks: [
      {
        paragraphs: [
          {
            zh: '企业家、高压人群的健康困扰，往往源于免疫系统的失衡。SL为您定制NKT细胞精准调理。',
            en: 'For entrepreneurs and people under sustained pressure, health concerns can be linked to immune imbalance. SL provides a personalised NK-T cell programme.',
          },
        ],
        bullets: [
          { zh: '采用国际前沿技术，激活并扩增高活性NKT细胞', en: 'Uses advanced techniques to activate and expand highly active NK-T cells' },
          { zh: '靶向清除病原体、衰老细胞及炎症因子', en: 'Designed to target pathogens, ageing cells and inflammatory factors' },
          { zh: '重建免疫稳态，强化身体防御力', en: 'Aims to restore immune balance and strengthen the body’s defences' },
        ],
      },
      {
        paragraphs: [
          {
            zh: '当传统调理仅“治标”，SL已用NKT细胞实现“治本”。',
            en: 'Moving beyond short-term conditioning, SL explores NK-T cells as a deeper immune-management approach.',
          },
        ],
        bullets: [
          { zh: '国际前沿技术，颠覆式免疫调理方案', en: 'An advanced and innovative immune-conditioning programme' },
          { zh: '一次调理，长期受益：抗炎、抗肿瘤、抗衰老多效合一', en: 'Designed for lasting benefits across inflammation, tumour defence and healthy ageing' },
          { zh: '适用广：亚健康、慢性病管理、肿瘤预防全场景', en: 'Broadly oriented toward sub-health, chronic-condition management and tumour prevention' },
        ],
      },
    ],
    images: [
      'Weixin Image_2026-08-26_134803_926.jpg',
      'Weixin Image_2026-08-26_134812_007.jpg',
      'Weixin Image_2026-08-26_134816_247.jpg',
    ],
  },
  {
    slug: 'chronic-care',
    folder: '糖尿病高血压-慢病管理',
    kicker: 'CHRONIC CARE',
    title: { zh: '糖尿病高血压·慢病管理', en: 'Diabetes, Hypertension & Chronic Care' },
    shortTitle: { zh: '慢病管理', en: 'Chronic Care' },
    summary: {
      zh: '以间充质干细胞的再生潜力，探索糖尿病与慢性病的个体化健康管理。',
      en: 'Exploring the regenerative potential of mesenchymal stem cells in personalised chronic-condition management.',
    },
    blocks: [
      {
        paragraphs: [
          { zh: '曾被“家族遗传”判了“终身控糖”的死刑？现在，我们为你递上“逆转”的钥匙！', en: 'Have hereditary risk factors made lifelong blood-sugar control feel inevitable? We explore a new possibility.' },
          { zh: 'SL健康管理中心【间充质干细胞治疗】，以细胞再生之力对抗糖尿病：', en: 'SL Health Management Centre uses a mesenchymal stem-cell programme to explore regenerative support for diabetes:' },
        ],
        bullets: [
          { zh: '修复胰岛β细胞，恢复胰岛素分泌', en: 'Support pancreatic beta-cell repair and insulin secretion' },
          { zh: '改善胰岛素抵抗，调控血糖稳态', en: 'Improve insulin resistance and support blood-glucose stability' },
          { zh: '减少药物依赖，重获生活自由', en: 'Aim to reduce medication dependence and restore everyday freedom' },
        ],
      },
      {
        paragraphs: [
          { zh: '真实案例见证：28岁客户二次治疗后，血糖指标明显改善，笑容比阳光更灿烂！', en: 'Case note: after a second treatment, a 28-year-old client showed a marked improvement in blood-glucose indicators.' },
          { zh: '遗传不是宿命，选择决定新生！', en: 'Genetics need not define every outcome; informed choices can open new possibilities.' },
        ],
      },
    ],
    images: [
      'Weixin Image_2026-08-26_134851_021.jpg',
      'Weixin Image_2026-08-26_134857_321.jpg',
      'Weixin Image_2026-08-26_134901_107.jpg',
    ],
  },
  {
    slug: 'biologic-stem-cells',
    folder: '生物制剂干细胞',
    kicker: 'REGENERATIVE MEDICINE',
    title: { zh: '生物制剂干细胞', en: 'Biologic Stem Cells' },
    shortTitle: { zh: '生物制剂干细胞', en: 'Biologic Stem Cells' },
    summary: {
      zh: '生命健康的“修复钥匙”，从细胞层面探索身体修复与更新的潜力。',
      en: 'A cellular “key to repair”, exploring the body’s potential for restoration and renewal.',
    },
    blocks: [
      {
        paragraphs: [
          { zh: '我们是否曾想象：身体的每一次损伤与衰老，都可能拥有被“重置”与“修复”的潜力？', en: 'What if every instance of damage and ageing in the body held the potential to be reset and repaired?' },
          { zh: '干细胞，这枚生命的原始密码，正引领一场医学范式的革命。', en: 'Stem cells—the original code of life—are helping lead a new medical paradigm.' },
          { zh: '真正的年轻态，源于细胞的活力。细胞疗法，当代抗衰科学的前沿领域。它旨在从细胞层面入手，激活人体自身的修复与更新系统，促进组织再生，改善机体功能。', en: 'Healthy ageing begins with cellular vitality. Cell therapy is a frontier of modern longevity science, seeking to activate the body’s own repair and renewal systems, support tissue regeneration and improve function.' },
          { zh: '科学告诉我们：衰老的本质，是生物制剂干细胞的衰减。它们是生命的“种子”，负责修复组织、更新细胞、激活活力。', en: 'Ageing is associated with a decline in regenerative stem-cell activity. These cells act as seeds of life, supporting tissue repair, cell renewal and vitality.' },
        ],
      },
      {
        heading: { zh: '再生医学带来的新可能', en: 'New possibilities in regenerative medicine' },
        paragraphs: [
          { zh: '通过补充高活性干细胞，重启身体修复机制：', en: 'By supplementing highly active stem cells, the programme aims to reactivate the body’s repair mechanisms:' },
        ],
        bullets: [
          { zh: '激活内在年轻力，淡化岁月痕迹', en: 'Activate inner vitality and soften visible signs of ageing' },
          { zh: '提升机体修复能力，焕发精神活力', en: 'Enhance the body’s repair capacity and support renewed energy' },
          { zh: '改善生理机能，让健康由内而外', en: 'Support physiological function and health from within' },
        ],
      },
    ],
    images: [
      'Weixin Image_2026-08-26_134941_815.jpg',
      'Weixin Image_2026-08-26_134952_658.jpg',
      'Weixin Image_2026-08-26_134957_892.jpg',
      'Weixin Image_2026-08-26_135001_772.jpg',
      'Weixin Image_2026-08-26_135018_268.jpg',
      'Weixin Image_2026-08-26_135021_883.jpg',
      'Weixin Image_2026-08-26_135025_448.jpg',
      'Weixin Image_2026-08-26_135029_171.jpg',
      'Weixin Image_2026-08-26_135032_966.jpg',
      'Weixin Image_2026-08-26_135037_199.jpg',
    ],
  },
].map((category) => ({
  ...category,
  images: category.images.map((image) => `${assetRoot}/${category.folder}/${image}`),
}));

export function CellTherapySection() {
  const { language, text } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const category = cellCategories[activeIndex];
  const localized = (value: LocalizedText) => value[language];

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null);
      if (event.key === 'ArrowLeft') setLightboxIndex((current) => current === null ? null : (current - 1 + category.images.length) % category.images.length);
      if (event.key === 'ArrowRight') setLightboxIndex((current) => current === null ? null : (current + 1) % category.images.length);
    };
    document.body.classList.add('sy-modal-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('sy-modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [category.images.length, lightboxIndex]);

  const selectCategory = (index: number) => {
    setActiveIndex(index);
    setLightboxIndex(null);
  };

  return <section id="cell-therapy" className="sy-cell-therapy sy-section" data-reveal>
    <div className="sy-container">
      <div className="sy-cell-heading">
        <div>
          <p className="sy-kicker">CELL HEALTH MANAGEMENT</p>
          <h2>{text('从细胞出发，探索健康新可能', 'New possibilities in cellular health')}</h2>
        </div>
        <p>{text('四类细胞健康管理项目，结合专业评估与个体化沟通，为长期健康提供更清晰的选择。', 'Four cellular health programmes, paired with professional assessment and personalised guidance for clearer long-term health decisions.')}</p>
      </div>

      <div className="sy-cell-tabs" role="tablist" aria-label={text('细胞健康管理分类', 'Cell health categories')}>
        {cellCategories.map((item, index) => <button
          type="button"
          role="tab"
          id={`cell-tab-${item.slug}`}
          aria-controls={`cell-panel-${item.slug}`}
          aria-selected={activeIndex === index}
          className={activeIndex === index ? 'active' : ''}
          key={item.slug}
          onClick={() => selectCategory(index)}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{localized(item.shortTitle)}</strong>
        </button>)}
      </div>

      <article className="sy-cell-panel" role="tabpanel" id={`cell-panel-${category.slug}`} aria-labelledby={`cell-tab-${category.slug}`} key={category.slug}>
        <div className="sy-cell-copy">
          <p className="sy-kicker">{category.kicker}</p>
          <h3>{localized(category.title)}</h3>
          <p className="sy-cell-summary">{localized(category.summary)}</p>
          <div className="sy-cell-readme">
            {category.blocks.map((block, blockIndex) => <div className="sy-cell-copy-block" key={`${category.slug}-${blockIndex}`}>
              {block.heading && <h4>{localized(block.heading)}</h4>}
              {block.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{localized(paragraph)}</p>)}
              {block.bullets && <ul>{block.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{localized(bullet)}</li>)}</ul>}
            </div>)}
          </div>
          <p className="sy-cell-disclaimer">{text('说明：以上内容用于项目介绍与健康科普，不构成诊断、疗效承诺或医疗建议；具体适用性请以专业医生面诊评估为准。', 'Note: This information is for programme introduction and health education only. It is not a diagnosis, guarantee of results or medical advice. Suitability requires an in-person clinical assessment.')}</p>
        </div>

        <div className="sy-cell-gallery-wrap">
          <div className="sy-cell-gallery-meta">
            <span>{text('项目图集', 'Programme gallery')}</span>
            <small>{category.images.length} {text('张素材', 'images')}</small>
          </div>
          <div className={`sy-cell-gallery sy-cell-gallery-${Math.min(category.images.length, 4)}`} data-stagger>
            {category.images.map((image, index) => <button
              type="button"
              className={index === 0 ? 'sy-cell-gallery-featured' : ''}
              key={image}
              onClick={() => setLightboxIndex(index)}
              aria-label={text(`查看${localized(category.title)}第${index + 1}张图片`, `View ${localized(category.title)} image ${index + 1}`)}
            >
              <Image src={image} alt={`${localized(category.title)} ${index + 1}`} fill sizes="(max-width: 760px) 50vw, (max-width: 1100px) 25vw, 18vw" />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>)}
          </div>
        </div>
      </article>
    </div>

    {lightboxIndex !== null && <div className="sy-cell-lightbox" role="dialog" aria-modal="true" aria-label={text('项目图片预览', 'Programme image preview')} onClick={() => setLightboxIndex(null)}>
      <button type="button" className="sy-cell-lightbox-close" aria-label={text('关闭预览', 'Close preview')} onClick={() => setLightboxIndex(null)}>×</button>
      {category.images.length > 1 && <button type="button" className="sy-cell-lightbox-prev" aria-label={text('上一张', 'Previous image')} onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + category.images.length) % category.images.length); }}>←</button>}
      <div className="sy-cell-lightbox-stage" onClick={(event) => event.stopPropagation()}>
        <Image src={category.images[lightboxIndex]} alt={`${localized(category.title)} ${lightboxIndex + 1}`} fill sizes="90vw" priority />
        <p>{localized(category.title)} · {String(lightboxIndex + 1).padStart(2, '0')} / {String(category.images.length).padStart(2, '0')}</p>
      </div>
      {category.images.length > 1 && <button type="button" className="sy-cell-lightbox-next" aria-label={text('下一张', 'Next image')} onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % category.images.length); }}>→</button>}
    </div>}
  </section>;
}
